const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const token = process.env['TOKEN'];
const clientId = "1030049276870545459"

const commands = [];

//fs dir
fs.readdirSync('./commands/').forEach(async dir => {
		const files = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

		for (const file of files) {
  const command = require(`../commands/${dir}/${file}`);
	commands.push(command.data.toJSON());
}
		
	});



const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
	Routes.applicationCommands(clientId),
	{ body: commands },
);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();