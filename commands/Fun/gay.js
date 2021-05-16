const { MessageEmbed } = require('discord.js-selfbot');
const { getMemberMention } = require('./../../utils/Mentions.js')

module.exports = {
    name: 'gay',
    description: 'Shows the gay meter for a user',
    usage: 'gay <Mention>',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        function gay(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let member = await getMemberMention(msg, args) || msg.author

        let embed = new MessageEmbed()
            .setColor(`#918bff`)
            .setThumbnail(`https://www.comprarbanderas.es/images/banderas/400/377-orgullo-gay_400px.jpg`)
            .setDescription(`**${member} is ${gay(0, 100)}% gay**`)
            .setTimestamp()
        msg.channel.send(embed)

    }
}