const { Message, MessageEmbed } = require('discord.js-selfbot');
const settings = require('./../../settings.json')
const prefix = settings.prefix

module.exports = {
	name: 'help',
	description: 'Prints out each command and its function',
	usage: 'help <Command> // <Nothing>',
	/**
	 * @param {Message} msg
	 */
	async execute(msg, args) {
		const embed = new MessageEmbed()
		embed.setTitle('Help Menu')
		embed.setColor('#918bff')
		embed.setTimestamp()

		for (let i = 0; i < Object.keys(msg.client.commands).length; i++) {
			const key = Object.keys(msg.client.commands)[i]
			if (args.length > 0 && Object.keys(msg.client.commands[key]).indexOf(args[0]) !== -1) {
				if (!msg.client.commands[key][args[0]].aliases) alias = "This command has no aliases"
				else alias = msg.client.commands[key][args[0]].aliases.join(", ")
				embed.fields = []
				embed.addField('Command Name', args[0])
				embed.addField('Description', msg.client.commands[key][args[0]].description)
				embed.addField('Usage', `${prefix}${msg.client.commands[key][args[0]].usage}`)
				embed.addField('Command Aliases', alias)
				msg.channel.send(embed)
				return;
			}
			embed.addField(key, Object.keys(msg.client.commands[key]).join(', '))
		}

		msg.channel.send(embed)
	}
}