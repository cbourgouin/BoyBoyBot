const Discord = require('discord.js');

 const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();


client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', (message) => {

  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(' ');
  const commands = args.shift().toLowerCase();

  if (commands === `ping`) {
      message.channel.send('Pong.');
  } 
  else if(commands === `serveur`) {
    message.channel.send(`Nom du serveur :  ${message.guild.name}\nNombre d'utilisateur : ${message.guild.memberCount}`);
  }
  else if(commands === `avatar`) {
    if(!message.mentions.users.size){
        return message.channel.send(`votre Avatar : ${message.author.displayAvatarURL({format : "png"})}`);
    }

    const avatarList = message.mentions.users.map(user => {
      return `l'avatar de ${user.username} : ${user.displayAvatarURL({format : "png"})}`;
    });

    message.channel.send(avatarList);
  }
})

client.login(token);
//client.login('NzYwNDQ3NTQyOTAyNjUyOTM4.X3ML9g.c1doW3O813QKQoBpMjSFp_T3Ekg');
