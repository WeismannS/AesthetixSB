const { MessageEmbed } = require('discord.js-selfbot');
const facts = require('./../../assets/cat-facts.json');

module.exports = {
    name: 'cat-fact',
    description: 'Returns an image of a cat',
    usage: 'cat-fact',
    aliases: ['catfact', 'cf'],
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        let answer = facts[Math.floor(facts.length * Math.random())]

        let embed = new MessageEmbed()
            .setColor(`#918bff`)
            .setDescription(`**${answer}**`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}