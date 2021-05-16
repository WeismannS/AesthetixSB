const { MessageEmbed } = require('discord.js-selfbot');
const { readFileSync, existsSync, writeFileSync } = require('fs');

module.exports = {
    name: 'add-embed-colour',
    description: 'Adds an embed colour to your storage for later viewing',
    usage: 'add-embed-colour <Input>',
    aliases: ['aec'],
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**You must provide a colour to store**`).setTimestamp())

        if (!existsSync('embed-colors.json')) {
            writeFileSync('embed-colors.json', '{}')
        }

        var object = JSON.parse(readFileSync('embed-colors.json', { encoding: 'utf8' }))

        if (Object.keys(object).indexOf(input) !== -1) {
            msg.channel.send(
                new MessageEmbed()
                    .setColor(`#918bff`)
                    .setDescription(`**${input} is already a favourite EColour**`)
                    .setTimestamp()
            )
            return;
        }

        object[input] = true

        writeFileSync('embed-colors.json', JSON.stringify(object, null, 2), { encoding: 'utf8' })

        msg.channel.send(
            new MessageEmbed()
                .setColor(input)
                .setDescription('`' + `${input}` + '`' + ` **has been added to favourite EColours**`)
                .setTimestamp()
        )
    }
}