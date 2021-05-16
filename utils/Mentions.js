const { Message } = require('discord.js-selfbot');

/**
 * @param {Message} Message
 * @param {Array<string>} args
 */
module.exports.getMemberMention = async (msg, args) => {
    if (msg.mentions.members.first()) return msg.mentions.members.first()

    var x = args[0]
    if (x !== undefined) {
        var y = x.toLowerCase()
        if (args.length > 0) {
            return (await msg.guild.members.fetch()).filter(user => user.id === args[0]).first() || (await msg.guild.members.fetch()).filter(member => member.user.username.toLowerCase().startsWith(y)).first() || (await msg.guild.members.fetch()).filter(member => member.displayName.toLowerCase().startsWith(y)).first()

        } else {
            msg.channel.send(new MessageEmbed()
                .setColor('RED')
                .setDescription('No user mentioned / Invalid args provided'))
        }
    }

}

/**
 * @param {Message} msg
 * @param {Array<string>} args
 */
module.exports.getBannedMention = async (msg, args) => {

    return (await msg.guild.fetchBans()).filter(ban => {
        if (args.join(' ').indexOf(ban.user.tag) === 0) {
            args = args.join(' ').substring(ban.user.tag.length + 1).split(' ')
            return true
        } else if (ban.user.id === args[0]) {
            args.shift()
            return true
        }
    }).first()
}

/**
 * @param {Message} Message
 * @param {Array<string>} args
 */
module.exports.getRoleMention = async (msg, args) => {
    if (msg.mentions.roles.first()) return msg.mentions.roles.first()

    var x = args[0]
    if (x !== undefined) {
        var y = x.toLowerCase()
        if (args.length > 0) {
            return (await msg.guild.roles.cache.find(r => r.name.toLowerCase().startsWith(y)) || msg.guild.roles.cache.get(args[0]) || msg.guild.roles.cache.find(r => r.name === args.join(" ")) || msg.mentions.roles.first()
            )
        }
    }
}
