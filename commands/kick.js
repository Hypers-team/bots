const Discord = require('discord.js');

module.exports={
    name:'kick',
    description: "Kick Any User",
    execute(message, args){
     const member = message.mentions.users.first();
         if(member){
           const memberTarger = message.guild.members.cache.get(member.id)
         
           memberTarger.kick();
           message.channel.send(`${member.tag} Has been Kicked From The Server`)
                
             }else{
               message.channel.send('I Cant Find That Member!!')
             }
             
    }       //else{
            // message.reply('This User Isn/t In The Server')
    }     