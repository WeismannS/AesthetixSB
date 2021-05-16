const { MessageEmbed } = require('discord.js-selfbot');

module.exports = {
    name: 'pastel-colours',
    description: 'Shows some pastel hex codes',
    usage: 'pastel-colours',
    aliases: ['pc'],
    async execute(msg, args) {

        let embed = new MessageEmbed()
            .setColor(`#918bff`)
            .setDescription(`**"Pastel Rainbow" Colours**`)
            .setImage(`https://aesthetics-peace.s-ul.eu/snG0fqcTtiQOS5mX`)
            .setTimestamp()
        msg.channel.send(embed)

    }
}