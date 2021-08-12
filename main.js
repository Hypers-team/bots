const Discord = require('discord.js');
const client  = new Discord.Client();
//const moment = require('moment.js')
const prefix = '$';

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file =>file.endsWith('.js'))


for(const file of commandFiles) {
     const command = require(`./commands/${file}`);
     client.commands.set(command.name, command);
 }
 
client.on('ready', ready =>{
console.log('Im Ready')

})

client.on('message', message =>{
if(!message.content.startsWith(prefix) || message.author.bot) return;
const args =  message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
 
if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
} 
else if(command === 'kick'){
     client.commands.get('kick').execute(message, args);
}
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
     if(!message.member.hasPermission('BAN_MEMBERS')) return ; 
     const args =  message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();
        if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
        }
});
client.on('message',message =>{
      if(!message.content.startsWith(prefix) || message.author.bot) return;
      const args =  message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
      if(command === 'help'){
      client.commands.get('help').execute(message, args)
      }
});
client.on('message',message =>{
      if(!message.content.startsWith(prefix) || message.author.bot) return;
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
      if(command === 'server'){
      client.commands.get('server').execute(message, args)
      }
});

client.on('message', message =>{
if(!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
if(command === 'user'){
      client.commands.get('user').execute(message ,args)
}
});
client.login('ODY3NTA4ODc2NTM0NjExOTY5.YPiImQ.XIhC230A7s8Nr7HkUPQxOp5iCh0');