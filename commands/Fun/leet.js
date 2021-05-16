const { MessageEmbed } = require('discord.js-selfbot');
const leet = require('1337');

module.exports = {
    name: 'leet',
    description: 'Converts given text to 1337 form',
    usage: 'leet <Text>',
    aliases: ['1337'],
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**You must provide some text to convert**`).setTimestamp())

        let embed = new MessageEmbed()
            .setColor(`#918bff`)
            .setDescription(`**${leet(input)}**`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}