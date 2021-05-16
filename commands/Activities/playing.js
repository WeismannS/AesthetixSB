const { MessageEmbed } = require('discord.js-selfbot');

module.exports = {
    name: 'playing',
    description: 'Sets your status to watching <input>',
    usage: 'watching <Input>',
    async execute(msg, args) {

        let input = args.join(" ")

        if (!input) {
            msg.channel.send(
                new MessageEmbed()
                    .setDescription('**You must input a status to set**')
                    .setColor('RED')
                    .setTimestamp()
            )
            return;
        }

        msg.client.user.setActivity(`${input}`, { type: 'WATCHING' })

        msg.channel.send(new MessageEmbed().setColor(`#918bff`).setDescription(`**Successfully set activity to** ` + '`' + `Watching ${input}` + '`').setTimestamp())
    }
}