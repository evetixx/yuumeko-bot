const WA = require('@open-wa/wa-automate');

exports.run = async (client, message, args) => {
    try {
        if (!message.isGroupMsg) return client.reply(message.from, `Perintah hanya bisa digunakan dalam grup`, message.id);

        const groupId = message.chat.groupMetadata.id;
        const getAdmin = await client.getGroupAdmins(groupId);
        const getMembers = await client.getGroupMembers(groupId);

        if (!message.isGroupMsg) return client.reply(message.from, 'Maaf, fitur ini hanya bisa digunakan di grup!', message.id);
        const tagMember =getMembers.map(member => `@${member.id.replace('@c.us', '')}`);
        const picker = tagMember[Math.floor(Math.random()* tagMember.length)];
        if (picker == '@6285716349712') return client.reply(message.from, 'Maaf, ancrit ganemu!', message.id);
        client.sendTextWithMentions(groupId, `${args.join(' ')}\n\nTag: ${picker}`);
    } catch (err) {
        client.reply(message.from, `Something went wrong:\n${err.message}`, message.id);
    }
};
exports.conf = {
    aliases: ['choose'],
    cooldown: 5
}

exports.help = {
    name: 'pick',
    description: 'Mention member grup',
    usage: 'pick',
    example: 'pick'
}