const { MessageEmbed } = require('discord.js-selfbot');

module.exports = {
    name: 'random-member',
    description: 'Gets a random member fron the discord',
    usage: 'random-member',
    aliases: ['randommember', 'randomm', 'rmember', 'rmem'],
    async execute(msg, args) {

        let member = msg.guild.members.cache.random()

        let embed = new MessageEmbed()
            .setColor(`#918bff`)
            .setDescription(`**Randomly Chose Member: ${member}**`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}