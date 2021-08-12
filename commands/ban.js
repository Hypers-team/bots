const Discord = require('discord.js');

module.exports={
    name:'ban',
    description: "Ban Any User",
    execute(message, args){
     const member = message.mentions.users.first();
         if(member){
           const memberTarger = message.guild.members.cache.get(member.id)
         
          memberTarger.ban();
           message.channel.send(`${member.tag} Has been Banned From The Server`).catch(console.error)
                
             }else{
               message.channel.send('I Cant Find That Member!!')
             } 
             
           //if(!message.mentions.users()){
            //message.channel.send('Please Mention Some One !!')
         // }
    }    //else{
            // message.reply('This User Isn/t In The Server')
    } 