const { MessageEmbed } = require('discord.js-selfbot');
const { getMemberMention } = require('../../utils/Mentions');

module.exports = {
    name: 'penis',
    description: 'Gets a users penis size',
    usage: 'penis <Mention>',
    aliases: ['pp'],
    async execute(msg, args) {

        let member = await getMemberMention(msg, args)

        if (!member) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**You must mention someone to measure their penis**`).setTimestamp())

        let replies = [
            "8=D",
            "8==D",
            "8===D",
            "8====D",
            "8=====D",
            "8======D",
            "8========D",
            "8=========D",
            "8==========D",
        ]

        let random = replies[Math.floor(Math.random() * replies.length)]

        let embed = new MessageEmbed()
            .setColor(`#918bff`)
            .setThumbnail(`https://www.worthview.com/wp-content/uploads/2019/01/Online-Ruler-1024x509.jpg`)
            .setDescription(`**${member}'s Penis size is: ${random}**`)
            .setFooter(`Ruler provided in thumbnail`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}