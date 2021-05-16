const { MessageEmbed } = require('discord.js-selfbot');
const { readFileSync } = require('fs');

module.exports = {
    name: 'favourites',
    description: 'Your embed colour storage',
    usage: 'favourites',
    aliases: ['favs'],
    async execute(msg, args) {

        const object = JSON.parse(readFileSync('embed-colors.json', { encoding: 'utf8' }))

        const tags = Object.keys(object);
        const ans = tags.join(', ')

        let embed = new MessageEmbed()
            .setColor('#918bff')
            .setTitle(`**Favourite Embed Colour List**`)
            .setDescription('`' + `${ans}` + '`')
            .setTimestamp()
        msg.channel.send(embed)

    }
}