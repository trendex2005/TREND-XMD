const fs = require("fs");
const path = "./data/userGroupData.json";

function loadData() {
    if (!fs.existsSync(path)) return { welcome: {}, goodbye: {} };
    return JSON.parse(fs.readFileSync(path));
}

function saveData(data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

async function handleWelcome(sock, chatId, message, matchText) {
    const data = loadData();
    data.welcome = data.welcome || {};

    if (matchText === "on") {
        data.welcome[chatId] = { enabled: true };
        saveData(data);
        await sock.sendMessage(chatId, { text: "✅ Welcome message enabled!" });
    } else if (matchText === "off") {
        delete data.welcome[chatId];
        saveData(data);
        await sock.sendMessage(chatId, { text: "❌ Welcome message disabled!" });
    } else {
        await sock.sendMessage(chatId, { 
            text: "⚙️ Use:\n*.welcome on* → Enable welcome\n*.welcome off* → Disable welcome"
        });
    }
}

async function handleGoodbye(sock, chatId, message, matchText) {
    const data = loadData();
    data.goodbye = data.goodbye || {};

    if (matchText === "on") {
        data.goodbye[chatId] = { enabled: true };
        saveData(data);
        await sock.sendMessage(chatId, { text: "✅ Goodbye message enabled!" });
    } else if (matchText === "off") {
        delete data.goodbye[chatId];
        saveData(data);
        await sock.sendMessage(chatId, { text: "❌ Goodbye message disabled!" });
    } else {
        await sock.sendMessage(chatId, { 
            text: "⚙️ Use:\n*.goodbye on* → Enable goodbye\n*.goodbye off* → Disable goodbye"
        });
    }
}

function isWelcomeOn(chatId) {
    const data = loadData();
    return data.welcome && data.welcome[chatId] && data.welcome[chatId].enabled;
}

function isGoodbyeOn(chatId) {
    const data = loadData();
    return data.goodbye && data.goodbye[chatId] && data.goodbye[chatId].enabled;
}

module.exports = { handleWelcome, handleGoodbye, isWelcomeOn, isGoodbyeOn };