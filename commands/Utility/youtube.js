const { Message, MessageEmbed } = require('discord.js-selfbot');
const yt = require('yt-search')

module.exports = {
    name: 'youtube',
    description: 'Searches youtube for given input',
    usage: 'youtube <Input>',
    aliases: ['yt'],
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**You must provide something to search**`).setTimestamp())

        await yt(input, (err, data) => {
            console.log(data.all[1])

            msg.channel.send(data.all[0].url)
        })

    }
}