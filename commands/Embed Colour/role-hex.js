const { MessageEmbed } = require('discord.js-selfbot');
const { getRoleMention } = require('../../utils/Mentions.js');

module.exports = {
    name: 'role-hex',
    description: 'Takes a roles hex colour and shows you it',
    usage: 'role-hex <Role>',
    aliases: ['rh'],
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) {
            msg.channel.send(
                new MessageEmbed()
                    .setDescription('**You must input a role to scan**')
                    .setColor('RED')
                    .setTimestamp()
            )
            return;
        }

        let role = await getRoleMention(msg, args)

        let RoleHex = role.hexColor

        msg.channel.send(
            new MessageEmbed()
                .setColor(RoleHex)
                .setDescription('`' + `${RoleHex}` + '`' + ` **Is ${role.toString()}'s Role HexCode**`)
                .setTimestamp()
        )
    }
}