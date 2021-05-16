const { MessageEmbed } = require('discord.js-selfbot');
const { readFileSync } = require('fs');

module.exports = {
    name: 'favourite-colour',
    description: 'Selects an embed colour from favourites, and shows the colour',
    usage: 'favourite-colour <Number>',
    aliases: ['favc'],
    async execute(msg, args) {

        if (!args[0]) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**You must input a favourites number**`).setTimestamp())

        const object = JSON.parse(readFileSync('embed-colors.json', { encoding: 'utf8' }))

        const tags = Object.keys(object);
        const ans = tags[args[0] - 1]

        if (!ans) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**That is not a valid input, try again**`).setFooter(`${tags.length} Total Favourites`).setTimestamp())

        let embed = new MessageEmbed()
            .setColor(ans)
            .setDescription(`** This is what your favourite Hex Code ** ` + '`' + `${ans}` + '`' + ` ** would look like **`)
            .setTimestamp()
        msg.channel.send(embed)

    }
}