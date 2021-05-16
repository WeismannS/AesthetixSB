const { Message, MessageEmbed } = require('discord.js-selfbot');

module.exports = {
    name: 'sell-out',
    description: 'Just advertises Aesthetix SB',
    usage: 'sell-out',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        const embed = new MessageEmbed()
            .setTitle('Aesthetix SelfBot:tm:')
            .setImage(`https://aesthetics-peace.s-ul.eu/lLpYLEJB6S4g2IX8`)
            .setDescription(`**Aesthetix SelfBot is a clean, smooth private bot. You should try it**`)
            .setColor('#918bff')
            .setFooter(`This is a good sell-out`)
            .setTimestamp()

        msg.channel.send(embed)
    }
}