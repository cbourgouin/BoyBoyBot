const Discord = require('discord.js');

 const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();


client.once('ready', () => {
  console.log('Ready!');
});

client.login(token);
