let interval;

const { Message, MessageEmbed } = require('discord.js-selfbot');
const ms = require('ms');
const figlet = require('figlet');

module.exports = {
    name: 'repeat',
    description: 'Repeats the given message for the amount of time you put',
    usage: 'repeat <Time> <Text>',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        if (args[0].toUpperCase() == 'OFF') {
            clearInterval(interval)
            interval = undefined;
            msg.channel.send(new MessageEmbed().setColor('#918bff').setDescription(`**Stopped the message repeating**`).setTimestamp())
            figlet("Ignore Error", async (err, ascii) => { console.log(ascii) })
            stop();
        }

        let time = ms(args[0])

        if (!time) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**You must provide an interval to repeat at**`).setTimestamp())

        let input = args.shift() && args.join(" ")

        if (!input) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**You must provide something to repeat**`).setTimestamp())

        if (!interval) {
            interval = setInterval(function () { msg.channel.send(input) }, time)
            msg.channel.send(new MessageEmbed().setColor('#918bff').setDescription(`**Starting your message: "${input}" on repeat for ${time}ms**`).setTimestamp())
            return;
        }
    }
}