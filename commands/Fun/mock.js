const { mock } = require('./../../utils/Functions.js');
const { MessageEmbed } = require('discord.js-selfbot');

module.exports = {
    name: 'mock',
    description: 'Converts given text to mocking form',
    usage: 'mock <Text>',
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**You must provide some text to convert**`).setTimestamp())

        let embed = new MessageEmbed()
            .setColor(`#918bff`)
            .setDescription(`**${mock(input)}**`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}