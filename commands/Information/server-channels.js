const { Message, MessageEmbed } = require('discord.js-selfbot');

module.exports = {
    name: 'server-channels',
    description: 'Displays every channel, including hidden ones',
    usage: 'server-channels',
    aliases: ['schannels', 'serverchannels', 'serverch'],
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        let channels = msg.guild.channels.cache.map(ch => ch.toString()).join(", ")

        if (channels.length > 2000) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**This server has too many channels to list\n${msg.guild.channels.cache.size} Channels**`).setTimestamp())

        const embed = new MessageEmbed()
            .setDescription(`**${channels}**`)
            .setColor('#918bff')
            .setTimestamp()
            .setFooter(`There are ${msg.guild.channels.cache.size} channels in total`)

        msg.channel.send(embed)
    }
}