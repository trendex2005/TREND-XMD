import config from '../config.cjs';

const menu = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "menu") {
    const start = new Date().getTime();
    await m.React('🪀');
    const end = new Date().getTime();
    const responseTime = ((end - start) / 1000).toFixed(2);

    const uptimeSeconds = process.uptime();
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    const uptime = `${hours}h ${minutes}m ${seconds}s`;

    let profilePictureUrl = 'https://files.catbox.moe/j2h8dg.jpg'; 
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 1500); 
      const pp = await sock.profilePictureUrl(m.sender, 'image', { signal: controller.signal });
      clearTimeout(timeout);
      if (pp) profilePictureUrl = pp;
    } catch (error) {
      console.log('🖼️ Profile pic fetch timed out or failed.');
    }

    const menuText = `
┏▣ ───◈𝙏𝙍𝙀𝙉𝘿-𝙓◈ ──────
│ ❦ 𝑹𝒖𝒏𝒕𝒊𝒎𝒆 : ${uptime}
│ ❦ 𝑺𝒑𝒆𝒆𝒅 : ${responseTime}s
│ ❦ 𝑴𝒐𝒅𝒆 : public
│ ❦ 𝑷𝒓𝒆𝒇𝒊𝒙 : ${prefix}
│ ❦ 𝑶𝒘𝒏𝒆𝒓 : 𝑻𝒓𝒆𝒏𝒅𝒆𝒙
│ ❦ 𝒗𝒆𝒓𝒔𝒊𝒐𝒏 : *2.0.0*
┗▣───────────────◈
┏▣ ━━━━━━━━━━━━━━━━━━
│𓅓 *WE LEAD OTHERS COPY* 𓅓
┗▣━━━━━━━━━━━━━━━━━━

┏▣ ◈ *𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨* ◈
│➽ 𝙢𝙚𝙣𝙪
│➽ 𝙗𝙪𝙜𝙢𝙚𝙣𝙪
│➽ 𝙨𝙥𝙚𝙚𝙙
│➽ 𝙖𝙡𝙞𝙫𝙚
│➽ 𝙨𝙪𝙙𝙤
│➽ 𝙖𝙙𝙙𝙥𝙧𝙚𝙢
│➽ 𝙙𝙚𝙫
│➽ 𝙖𝙡𝙡𝙫𝙖𝙧
│➽ 𝙥𝙞𝙣𝙜
│➽ 𝙤𝙬𝙣𝙚𝙧
┗▣
┏▣◈ *𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦* ◈
│➽ 𝙟𝙤𝙞𝙣
│➽ 𝙖𝙪𝙩𝙤𝙧𝙚𝙖𝙙
│➽ 𝙥𝙖𝙞𝙧
│➽ 𝙡𝙚𝙖𝙫𝙚
│➽ 𝙖𝙪𝙩𝙤𝙨𝙩𝙖𝙩𝙪𝙨𝙫𝙞𝙚𝙬
│➽ 𝙖𝙪𝙩𝙤𝙩𝙮𝙥𝙞𝙣𝙜
│➽ 𝙖𝙪𝙩𝙤𝙗𝙡𝙤𝙘𝙠
│➽ 𝙖𝙪𝙩𝙤𝙧𝙚𝙘𝙤𝙧𝙙𝙞𝙣𝙜
│➽ 𝙖𝙪𝙩𝙤𝙨𝙩𝙞𝙘𝙠𝙚𝙧
│➽ 𝙖𝙣𝙩𝙞𝙨𝙩𝙞𝙘𝙠𝙚𝙧
│➽ 𝙧𝙚𝙨𝙩𝙖𝙧𝙩
│➽ 𝙗𝙡𝙤𝙘𝙠
│➽ 𝙪𝙣𝙗𝙡𝙤𝙘𝙠
│➽ 𝙖𝙣𝙩𝙞𝙘𝙖𝙡𝙡
│➽ 𝙖𝙣𝙩𝙞𝙙𝙚𝙡𝙚𝙩𝙚
│➽ 𝙪𝙥𝙡𝙤𝙖𝙙
│➽ 𝙫𝙫
│➽ 𝙨𝙚𝙩𝙨𝙩𝙖𝙩𝙪𝙨
│➽ 𝙖𝙡𝙡𝙘𝙙𝙢𝙨
│➽ 𝙘𝙖𝙡𝙘𝙪𝙡𝙖𝙩𝙤𝙧
│➽ 𝙖𝙡𝙬𝙖𝙮𝙨𝙤𝙣𝙡𝙞𝙣𝙚
│➽ 𝙙𝙚𝙡𝙚𝙩𝙚
│➽ 𝙫𝙫2
│➽ 𝙨𝙚𝙩𝙥𝙧𝙚𝙛𝙞𝙭
│➽ 𝙨𝙚𝙩𝙤𝙬𝙣𝙚𝙧𝙣𝙖𝙢𝙚
│➽ 𝙥𝙧𝙤𝙛𝙞𝙡𝙚
│➽ 𝙧𝙚𝙥𝙤
┗▣
┏▣  ◈*𝗔𝗜 & 𝗖𝗛𝗔𝗧* ◈
│➽ 𝙖𝙞
│➽ 𝙗𝙪𝙜
│➽ 𝙗𝙤𝙩
│➽ 𝙧𝙚𝙥𝙤𝙧𝙩
│➽ 𝙜𝙚𝙢𝙞𝙣𝙞
│➽ 𝙘𝙝𝙖𝙩𝙗𝙤𝙩
│➽ 𝙜𝙥𝙩
│➽ 𝙡𝙮𝙙𝙞𝙖
│➽ 𝙩𝙧𝙚𝙣𝙙-𝙖𝙞
┗▣
┏▣  ◈ *𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥𝗦* ◈
│➽ 𝙨𝙚𝙘𝙪𝙧𝙞𝙩𝙮
│➽ 𝙨𝙚𝙨𝙨𝙞𝙤𝙣𝙘𝙝𝙚𝙘𝙠
│➽ 𝙗𝙡𝙤𝙘𝙠𝙪𝙣𝙠𝙣𝙤𝙬𝙣
│➽ 𝙖𝙪𝙩𝙤𝙗𝙡𝙤𝙘𝙠
│➽ 𝙝𝙤𝙨𝙩
│➽ 𝙖𝙣𝙩𝙞𝙨𝙥𝙖𝙢
│➽ 𝙖𝙣𝙩𝙞𝙗𝙪𝙜𝙨
│➽ 𝙖𝙩𝙩𝙥
│➽ 𝙩𝙤𝙞𝙢𝙖𝙜𝙚
│➽ 𝙢𝙥3
│➽ 𝙨𝙨
│➽ 𝙛𝙖𝙣𝙘𝙮
│➽ 𝙪𝙧𝙡
│➽ 𝙪𝙧𝙡2
│➽ 𝙨𝙝𝙤𝙧𝙩𝙚𝙣
│➽ 𝙨𝙩𝙞𝙘𝙠𝙚𝙧
│➽ 𝙩𝙖𝙠𝙚
┗▣
┏▣ ◈ *𝗦𝗘𝗔𝗥𝗖𝗛 & 𝗧𝗢𝗢𝗟𝗦* ◈
│➽ 𝙜𝙤𝙤𝙜𝙡𝙚
│➽ 𝙢𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚
│➽ 𝙦𝙪𝙧𝙖𝙣𝙫𝙞𝙙𝙚𝙤
│➽ 𝙦𝙪𝙧𝙖𝙞𝙢𝙖𝙜𝙚
│➽ 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠
│➽ 𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢
│➽ 𝙩𝙞𝙠𝙩𝙤𝙠
│➽ 𝙡𝙮𝙧𝙞𝙘𝙨
│➽ 𝙮𝙩𝙨𝙚𝙖𝙧𝙘𝙝
│➽ 𝙖𝙥𝙥
│➽ 𝙗𝙞𝙣𝙜
│➽ 𝙞𝙥𝙨𝙩𝙖𝙡𝙠
│➽ 𝙞𝙢𝙙𝙗
│➽ 𝙥𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩
│➽ 𝙜𝙞𝙩𝙝𝙪𝙗𝙨𝙩𝙖𝙡𝙠
│➽ 𝙞𝙢𝙖𝙜𝙚
│➽ 𝙧𝙞𝙣𝙜𝙩𝙤𝙣𝙚
│➽ 𝙥𝙡𝙖𝙮𝙨𝙩𝙤𝙧𝙚
│➽ 𝙨𝙝𝙖𝙯𝙖𝙢
┗▣
┏▣ ◈ *𝗙𝗨𝗡 & 𝗚𝗔𝗠𝗘𝗦*◈
│➽ 𝙜𝙚𝙩𝙥𝙥
│➽ 𝙖𝙫𝙖𝙩𝙖𝙧
│➽ 𝙬𝙘𝙜
│➽ 𝙟𝙤𝙠𝙚
│➽ 𝙩𝙩𝙩
│➽ 𝙮𝙚𝙨𝙤𝙧𝙣𝙤
│➽ 𝙘𝙤𝙣𝙣𝙚𝙘𝙩4
│➽ 𝙧𝙖𝙣𝙠
│➽ 𝙦𝙪𝙞𝙯𝙯
│➽ 𝙢𝙤𝙫𝙞𝙚
│➽ 𝙛𝙡𝙞𝙧𝙩
│➽ 𝙜𝙞𝙫𝙚𝙩𝙚𝙭𝙩
│➽ 𝙧𝙤𝙖𝙨𝙩
│➽ 𝙖𝙣𝙞𝙢𝙚
│➽ 𝙥𝙧𝙤𝙛𝙞𝙡𝙚
│➽ 𝙚𝙗𝙞𝙣𝙖𝙧𝙮
│➽ 𝙛𝙚𝙩𝙘𝙝
│➽ 𝙦𝙘
│➽ 𝙘𝙤𝙪𝙥𝙡𝙚
│➽ 𝙥𝙤𝙡𝙡
│➽ 𝙨𝙘𝙤𝙧𝙚
│➽ 𝙩𝙤𝙦𝙧
│➽ 𝙩𝙚𝙢𝙥𝙢𝙖𝙞𝙡
┗▣
┏▣ ◈ *𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗡𝗧𝗥𝗢𝗟*◈
│➽ 𝙠𝙞𝙘𝙠𝙖𝙡𝙡
│➽ 𝙧𝙚𝙢𝙤𝙫𝙚
│➽ 𝙩𝙖𝙜𝙖𝙡𝙡
│➽ 𝙝𝙞𝙙𝙚𝙩𝙖𝙜
│➽ 𝙛𝙤𝙧𝙬𝙖𝙧𝙙
│➽ 𝙜𝙚𝙩𝙖𝙡𝙡
│➽ 𝙜𝙧𝙤𝙪𝙥 𝙤𝙥𝙚𝙣
│➽ 𝙜𝙧𝙤𝙪𝙥 𝙘𝙡𝙤𝙨𝙚
│➽ 𝙖𝙙𝙙
│➽ 𝙫𝙘𝙛
│➽ 𝙡𝙚𝙛𝙩
│➽ 𝙥𝙧𝙤𝙢𝙤𝙩𝙚𝙖𝙡𝙡
│➽ 𝙙𝙚𝙢𝙤𝙩𝙚𝙖𝙡𝙡
│➽ 𝙨𝙚𝙩𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣
│➽ 𝙡𝙞𝙣𝙠𝙜𝙘
│➽ 𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠
│➽ 𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠2
│➽ 𝙖𝙣𝙩𝙞𝙨𝙩𝙞𝙘𝙠𝙚𝙧
│➽ 𝙖𝙣𝙩𝙞𝙨𝙥𝙖𝙢
│➽ 𝙘𝙧𝙚𝙖𝙩𝙚
│➽ 𝙨𝙚𝙩𝙣𝙖𝙢𝙚
│➽ 𝙥𝙧𝙤𝙢𝙤𝙩𝙚
│➽ 𝙙𝙚𝙢𝙤𝙩𝙚
│➽ 𝙜𝙧𝙤𝙪𝙥𝙞𝙣𝙛𝙤
│➽ 𝙗𝙖𝙡𝙖𝙣𝙘𝙚
┗▣
┏▣ ◈ *𝗛𝗘𝗡𝗧𝗔𝗜* ◈
│➽ 𝙝𝙣𝙚𝙠𝙤
│➽ 𝙩𝙧𝙖𝙥
│➽ 𝙝𝙬𝙖𝙞𝙛𝙪
│➽ 𝙘𝙤𝙪𝙥𝙡𝙚𝙥𝙥
│➽ 𝙬𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧
│➽ 𝙛𝙡𝙪𝙭
│➽ 𝙧𝙚𝙢𝙤𝙫𝙚𝙗𝙜
│➽ 𝙝𝙚𝙣𝙩𝙖𝙞
┗▣
┏▣ ◈ *𝗔𝗨𝗗𝗜𝗢 𝗘𝗙𝗙𝗘𝗖𝗧𝗦* ◈
│➽ 𝙚𝙖𝙧𝙧𝙖𝙥𝙚
│➽ 𝙙𝙚𝙚𝙥
│➽ 𝙗𝙡𝙤𝙬𝙣
│➽ 𝙗𝙖𝙨𝙨
│➽ 𝙣𝙞𝙜𝙝𝙩𝙘𝙤𝙧𝙚
│➽ 𝙛𝙖𝙩
│➽ 𝙛𝙖𝙨𝙩
│➽ 𝙧𝙤𝙗𝙤𝙩
│➽ 𝙩𝙪𝙥𝙖𝙞
│➽ 𝙨𝙢𝙤𝙤𝙩𝙝
│➽ 𝙨𝙡𝙤𝙬
│➽𝙨𝙖𝙮
│➽ 𝙧𝙚𝙫𝙚𝙧𝙨𝙚
┗▣
┏▣ ◈ *𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡𝗦* ◈
│➽ 𝙗𝙤𝙣𝙠
│➽ 𝙗𝙪𝙡𝙡𝙮
│➽ 𝙮𝙚𝙚𝙩
│➽ 𝙨𝙡𝙖𝙥
│➽ 𝙣𝙤𝙢
│➽ 𝙥𝙤𝙠𝙚
│➽ 𝙖𝙬𝙤𝙤
│➽ 𝙬𝙖𝙫𝙚
│➽ 𝙨𝙢𝙞𝙡𝙚
│➽ 𝙙𝙖𝙣𝙘𝙚
│➽ 𝙨𝙢𝙪𝙜
│➽ 𝙗𝙡𝙪𝙨𝙝
│➽ 𝙘𝙧𝙞𝙣𝙜𝙚
│➽ 𝙨𝙖𝙙
│➽ 𝙝𝙖𝙥𝙥𝙮
│➽ 𝙨𝙝𝙞𝙣𝙤𝙗𝙪
│➽ 𝙘𝙪𝙙𝙙𝙡𝙚
│➽ 𝙜𝙡𝙤𝙢𝙥
│➽ 𝙝𝙖𝙣𝙙𝙝𝙤𝙡𝙙
│➽ 𝙝𝙞𝙜𝙝𝙛𝙞𝙫𝙚
│➽ 𝙠𝙞𝙘𝙠
│➽ 𝙠𝙞𝙡𝙡
│➽ 𝙠𝙞𝙨𝙨
│➽ 𝙘𝙧𝙮
│➽ 𝙗𝙞𝙩𝙚
│➽ 𝙡𝙞𝙘𝙠
│➽ 𝙥𝙖𝙩
│➽ 𝙝𝙪𝙜
│
┗▣━━━━━━━━━━━━━━━━━━
│𓅓 *𝙬𝙚 𝙡𝙚𝙖𝙙 𝙤𝙩𝙝𝙚𝙧𝙨 𝙘𝙤𝙥𝙮* 𓅓
┗▣━━━━━━━━━━━━━━━━━━
    `.trim();

    const newsletterContext = {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterName: "TREND-X",
        newsletterJid: "120363401765045963@newsletter"
      }
    };

    // menu image message
    await sock.sendMessage(m.from, {
      image: { url: profilePictureUrl },
      caption: menuText,
      contextInfo: newsletterContext
    }, { quoted: m });

    // 🎵 popkid random songs
    const songUrls = [
      'https://files.catbox.moe/2b33jv.mp3',
      'https://files.catbox.moe/0cbqfa.mp3',
      'https://files.catbox.moe/j4ids2.mp3',
      'https://files.catbox.moe/vv2qla.mp3'  
    ];
    const random = songUrls[Math.floor(Math.random() * songUrls.length)];

    await sock.sendMessage(m.from, {
      audio: { url: random },
      mimetype: 'audio/mpeg',
      ptt: false,
      contextInfo: newsletterContext
    }, { quoted: m });
  }
};

export default menu;