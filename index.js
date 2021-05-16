const Discord = require('discord.js-selfbot');
const { readdirSync, lstatSync } = require("fs");
const settings = require("./settings.json");
const client = new Discord.Client()

const cmdsDir = readdirSync('commands')
const eventsDir = readdirSync('events')

client.commands = {}

for (let i = 0; i < eventsDir.length; i++) {
	client.on(eventsDir[i].split('.')[0], (...params) => {
		if (Array.isArray(params) && params.length > 0)
			require(`./events/${eventsDir[i]}`)(...params)
		else
			require(`./events/${eventsDir[i]}`)(client)
	})
}

client.fldrToggle = true
for (let i = 0; i < cmdsDir.length; i++) {
	let cmd_or_dir = cmdsDir[i]

	if (!client.fldrToggle)
		client.commands[cmd_or_dir.split('.')[0]] = require(`./commands/${cmd_or_dir}`)
	else if (lstatSync(`commands/${cmd_or_dir}`).isDirectory()) {
		client.commands[cmd_or_dir] = {}

		let categoryDir = readdirSync(`commands/${cmd_or_dir}`)
		for (let i2 = 0; i2 < categoryDir.length; i2++) {
			let cmdFile = categoryDir[i2]
			if (lstatSync(`commands/${cmd_or_dir}/${cmdFile}`).isFile()) {
				client.commands[cmd_or_dir][cmdFile.split('.')[0]] = require(`./commands/${cmd_or_dir}/${cmdFile}`)
			}
		}
	}
}

client.login(settings.token)