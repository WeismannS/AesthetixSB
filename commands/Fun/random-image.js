const { MessageEmbed } = require('discord.js-selfbot');
const { RandomPicture } = require('random-picture')

module.exports = {
    name: 'random-image',
    description: 'Fetches a random image',
    usage: 'random-image',
    aliases: ['randomimage', 'randomi', 'rimage'],
    async execute(msg, args) {

        const image = await RandomPicture()

        let embed = new MessageEmbed()
            .setColor(`#918bff`)
            .setImage(`${image.url}`)
            .setFooter(`These images are completely random`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}