const Discord = require('discord.js')
const client = new Discord.Client
//const moment = require('moment.js')
const prefix = '$'
 
module.exports = {
    name: 'user',
     execute(message , args){
     var userr = message.mentions.users.first() || message.author;
     var member = message.mentions.members.first() || message.member;
     
     let userinfo = userr.displayAvatarURL({size: 2048 , dynamic: true});
     var embed = new Discord.MessageEmbed()
     .setTitle()
     .setAuthor(`${userr.username}`,userr.displayAvatarURL({dynamic:true}))
     .setThumbnail(userinfo)
     .setFooter(`${message.author.username}`, message.author.displayAvatarURL())



     message.channel.send(embed)
     }
     }
