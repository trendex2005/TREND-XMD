import { setAntilink, getAntilink, removeAntilink } from '../lib/index.js';
import isAdmin from '../lib/isAdmin.js';

export async function handleAntilinkCommand(sock, chatId, userMessage, senderId, isSenderAdmin) {
    try {
        if (!isSenderAdmin) {
            await sock.sendMessage(chatId, { text: '```For Group Admins Only!```' });
            return;
        }

        const prefix = '.';
        const args = userMessage.slice(prefix.length + 8).toLowerCase().trim().split(' ');
        const action = args[0];
        const status = args[1];

        const usage = `\`\`\`ANTILINK SETUP\n\nUsage:\n${prefix}antilink\n(to see current status)\n${prefix}antilink [kick|delete|warn] on\n${prefix}antilink [kick|delete|warn] off\n\`\`\``;

        if (!action) {
            const currentConfig = await getAntilink(chatId, 'on');
            const currentStatus = currentConfig && currentConfig.enabled ? 'ON' : 'OFF';
            const currentAction = currentConfig && currentConfig.action ? currentConfig.action : 'delete (default)';

            await sock.sendMessage(chatId, {
                text: `*_Antilink Configuration:_*` +
                    `\nStatus: *${currentStatus}*` +
                    `\nAction: *${currentAction}*\n\n` +
                    usage
            });
            return;
        }

        const validActions = ['kick', 'delete', 'warn'];
        if (!validActions.includes(action)) {
            await sock.sendMessage(chatId, { text: `*_Invalid action. Please use kick, delete, or warn._*` });
            return;
        }

        if (status === 'on') {
            const result = await setAntilink(chatId, 'on', action);
            if (result) {
                await sock.sendMessage(chatId, {
                    text: `*_Antilink has been turned ON with action set to ${action}_*`
                });
            } else {
                await sock.sendMessage(chatId, {
                    text: '*_Failed to turn on Antilink_*'
                });
            }
        } else if (status === 'off') {
            await removeAntilink(chatId, 'on');
            await sock.sendMessage(chatId, { text: '*_Antilink has been turned OFF_*' });
        } else {
            await sock.sendMessage(chatId, { text: usage });
        }
    } catch (error) {
        console.error('Error in antilink command:', error);
        await sock.sendMessage(chatId, { text: '*_Error processing antilink command_*' });
    }
}

export async function handleLinkDetection(sock, chatId, message, userMessage, senderId) {
    const antilinkSetting = await getAntilink(chatId, 'on');
    if (!antilinkSetting || !antilinkSetting.enabled) {
        return false; // No antilink enabled for this group
    }

    const action = antilinkSetting.action || 'delete'; // Default to delete if not set

    const linkPatterns = {
        whatsappGroup: /chat\.whatsapp\.com\/[A-Za-z0-9]{20,}/,
        whatsappChannel: /wa\.me\/channel\/[A-Za-z0-9]{20,}/,
        telegram: /t\.me\/[A-Za-z0-9_]+/,
        allLinks: /https?:\/\/[^\s]+/,
    };

    let isLinkDetected = false;
    if (linkPatterns.allLinks.test(userMessage)) {
        isLinkDetected = true;
    }

    if (isLinkDetected) {
        console.log(`Detected a link! Action: ${action}`);

        const mentionedJidList = [senderId];
        await sock.sendMessage(chatId, {
            text: `⚠️ Warning! @${senderId.split('@')[0]}, posting links is not allowed.`,
            mentions: mentionedJidList
        });

        // The bot needs to be an admin to perform any action.
        const { isBotAdmin } = await isAdmin(sock, chatId, sock.user.id);
        if (!isBotAdmin) {
            await sock.sendMessage(chatId, { text: 'I need to be an admin to enforce antilink rules.' });
            return true;
        }

        switch (action) {
            case 'delete':
                try {
                    await sock.sendMessage(chatId, {
                        delete: {
                            remoteJid: chatId,
                            fromMe: false,
                            id: message.key.id,
                            participant: senderId
                        }
                    });
                    console.log(`Message with ID ${message.key.id} deleted successfully.`);
                } catch (error) {
                    console.error('Failed to delete message:', error);
                }
                break;

            case 'kick':
                try {
                    await sock.groupParticipantsUpdate(chatId, [senderId], 'remove');
                    await sock.sendMessage(chatId, {
                        text: `User @${senderId.split('@')[0]} has been kicked for posting a link.`,
                        mentions: mentionedJidList
                    });
                    console.log(`User ${senderId} kicked successfully.`);
                } catch (error) {
                    console.error('Failed to kick user:', error);
                    await sock.sendMessage(chatId, {
                        text: `Failed to kick @${senderId.split('@')[0]}. I might not have the necessary permissions.`,
                        mentions: mentionedJidList
                    });
                }
                break;

            case 'warn':
                await sock.sendMessage(chatId, {
                    text: `@${senderId.split('@')[0]} has been warned for posting a link.`,
                    mentions: mentionedJidList
                });
                console.log(`User ${senderId} warned.`);
                break;
        }

        return true; // A link was detected and handled
    } else {
        console.log('No link detected.');
        return false; // No link was detected
    }
          } };

export default antilinkCommand;
