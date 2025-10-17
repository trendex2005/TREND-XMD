import fetch from 'node-fetch';

export default {
    name: 'dare',
    alias: ['truthordare', 'dareme'],
    desc: 'Sends a random dare message',
    category: 'fun',

    async exec(sock, m, args, store) {
        try {
            const shizokeys = 'shizo';
            const res = await fetch(`https://shizoapi.onrender.com/api/texts/dare?apikey=${shizokeys}`);
            
            if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
            
            const json = await res.json();
            const dareMessage = json.result || 'No dare found! Try again later.';

            await sock.sendMessage(m.chat, { text: dareMessage }, { quoted: m });
        } catch (error) {
            console.error('❌ Dare Command Error:', error);
            await sock.sendMessage(m.chat, { text: '❌ Failed to fetch dare. Please try again later!' }, { quoted: m });
        }
    }
};
export default dare;
