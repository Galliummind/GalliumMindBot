const fs = require ('fs');
// const { SlashCommandBuilder } = require ('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, clientId, guildId } = require ('./config.json');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);
    
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);



// //Registering Commands (old method, not recommended unless the program is simple)
// const commands
//     new SlashCommandBuilder().setName('ping').setDescription('Pong, testing'),
//     new SlashCommandBuilder().setName('server').setDescription('replies with server info!'),
//     new SlashCommandBuilder().setName('user').setDescription('Replies with user info'),
//     ]//end of const commands
// .map(command => command.toJSON());
