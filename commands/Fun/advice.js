const { MessageEmbed } = require('discord.js-selfbot');
const Quote = require('inspirational-quotes');

module.exports = {
    name: 'advice',
    description: 'Returns some advice to help you',
    usage: 'advice',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        let embed = new MessageEmbed()
            .setColor(`#918bff`)
            .setDescription(`**${Quote.getRandomQuote()}**`)
            .setFooter(`Never forget the legends in your life`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}