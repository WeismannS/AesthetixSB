const { MessageEmbed } = require('discord.js-selfbot');

module.exports = {
    name: 'good-hexs',
    description: 'A variety of good professional hex codes and the links for info about them',
    usage: 'good-hexs',
    aliases: ['gh'],
    async execute(msg, args) {

        let embed = new MessageEmbed()
            .setTitle(`Decent Hex Codes`)
            .setColor(`#918bff`)
            .addField(`#0099ff`, `[A Nice Professional Blue](https://www.color-hex.com/color/0099ff)`, true)
            .addField(`#f3f3f3`, `[A Nice Professional White](https://www.htmlcsscolor.com/hex/F3F3F3)`, true)
            .addField(`#918bff`, `[A Nice Light Mauve](https://www.colorhexa.com/918bff)`, true)
            .addField(`#ffafb8`, `[A Professional Dark Red](https://www.color-hex.com/color/ffafb8)`, true)
            .addField(`#fecea8`, `[A Casual Beige](https://www.colorhexa.com/fecea8)`, true)
            .addField(`#99b898`, `[A Calm Green](https://www.colorhexa.com/99b898)`, true)
            .addField(`#ffaaa6`, `[A Chill Pink](https://www.colorhexa.com/ffaaa6)`, true)
            .addField(`#fc913a`, `[A Deep Orange](https://www.colorhexa.com/fc913a)`, true)
            .addField(`#631c63`, `[A Dark Purple](https://www.colorhexa.com/631c63)`, true)
            .setFooter(`Hope it was useful!`)
            .setTimestamp()
        msg.channel.send(embed)
    }
}