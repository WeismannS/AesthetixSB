const { Message, MessageEmbed } = require('discord.js-selfbot');

module.exports = {
    name: 'Role',
    description: 'Remove a role from members with a certain role',
    usage: 'Rrole',
    /**
     * @param {msg} msg
     */
    async execute(msg, args) {


role = await msg.mentions.roles.first()
role2 = await msg.mentions.roles.last()
if(!msg.member.hasPermission("MANAGE_ROLES")) return;
if (role.id == role2.id) { msg.channel.send(new MessageEmbed().setDescription("Please Put 2 Different Roles!"))}
else {Members = role.members.filter(m => m.roles.cache.has(role.id) && m.roles.cache.has(role2.id) )
Members.forEach(m => m.roles.remove(role2.id) );
if (Members.size<= 0) { msg.channel.send(new MessageEmbed().setDescription("It Seems there is no member with that role!"))}
else{
msg.channel.send(new MessageEmbed().setDescription(`${role2.toString()} has been removed from members with   ${role.toString()}`))}}}}