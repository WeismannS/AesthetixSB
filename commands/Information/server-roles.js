const { Message, MessageEmbed } = require('discord.js-selfbot');

module.exports = {
    name: 'server-roles',
    description: 'Displays every role in the server',
    usage: 'server-roles',
    aliases: ['sroles', 'serverroless', 'serverr'],
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        let roles = msg.guild.roles.cache.map(r => r.toString()).join(", ")

        if (roles.length > 2000) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**This server has too many roles to list\n${msg.guild.roles.cache.size} Roles**`).setTimestamp())

        const embed = new MessageEmbed()
            .setDescription(`**${roles}**`)
            .setColor('#918bff')
            .setTimestamp()
            .setFooter(`There are ${msg.guild.roles.cache.size} roles in total`)

        msg.channel.send(embed)
    }
}