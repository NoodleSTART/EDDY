const fs = require('node:fs')
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const token = process.env['TOKEN'];
//1030049276870545459
const client = new Client({ intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages,  
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	],  });

//collections
client.commands = new Collection();

// export handler
module.exports = client;
fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)
  
});


client.login(token);