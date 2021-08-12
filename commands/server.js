const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
module.exports = {
  name: 'server',
      execute(message, args){
//var memberCount = guild.members.filter(member => !member.user.bot)
var embed = new Discord.MessageEmbed()
.setAuthor(`${message.guild.name}`)
.setTitle('Server Info ')
.setDescription(`Server Name: ${message.guild.name}
Created At : ${message.guild.createdAt}
Member Count : ${message.guild.memberCount}
Owner : ${message.guild.owner}`)
.setColor('RANDOM')
.setTimestamp()
.setFooter(`${message.author.username}`, message.author.displayAvatarURL())
 message.channel.send(embed)
     
      } 
 }