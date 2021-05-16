const { MessageEmbed } = require('discord.js-selfbot');

module.exports = {
    name: 'listening',
    description: 'Sets your status to listening to <input>',
    usage: 'listening <Input>',
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

        msg.client.user.setActivity(`${input}`, { type: 'LISTENING' })

        msg.channel.send(new MessageEmbed().setColor(`#918bff`).setDescription(`**Successfully set activity to** ` + '`' + `Listening to ${input}` + '`').setTimestamp())
    }
}