const { MessageEmbed } = require('discord.js-selfbot');
const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    description: 'Returns ascii converted text',
    usage: 'ascii <Text>',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        let message = args.join(" ")

        if (!message) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**You must provide text to convert**`).setTimestamp())

        figlet(message, (err, ascii) => {
            if (err) {
                let embed = new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`**An error occured while executing the command**`)
                    .setTimestamp()

                msg.channel.send(embed)
                return;
            }
            msg.channel.send("```" + ascii + "```")
        })
    }
}