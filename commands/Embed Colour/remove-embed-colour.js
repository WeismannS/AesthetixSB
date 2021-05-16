const { MessageEmbed } = require('discord.js-selfbot');
const { readFileSync, existsSync, writeFileSync, lstatSync } = require('fs');

module.exports = {
    name: 'remove-embed-colour',
    description: 'Removes an embed colour from your storage',
    usage: 'remove-embed-colour <Input>',
    aliases: ['rec'],
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) {
            msg.channel.send(
                new MessageEmbed()
                    .setDescription('**You must input a colour to remove**')
                    .setColor('RED')
                    .setTimestamp()
            )
            return;
        }

        if (!existsSync('embed-colors.json')) {
            writeFileSync('embed-colors.json', '{}')
        }

        var object = JSON.parse(readFileSync('embed-colors.json', { encoding: 'utf8' }))

        if (Object.keys(object).indexOf(input) == -1) {
            msg.channel.send(
                new MessageEmbed()
                    .setDescription('**Input was not found in database**')
                    .setColor('RED')
                    .setTimestamp()
            )
            return;
        }

        delete object[input]

        writeFileSync('embed-colors.json', JSON.stringify(object, null, 2), { encoding: 'utf8' })

        msg.channel.send(
            new MessageEmbed()
                .setColor(input)
                .setDescription('`' + `${input}` + '`' + ` **has been removed from favourite EColours**`)
                .setTimestamp()
        )
    }
}