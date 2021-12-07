// https://stackoverflow.com/questions/9901082/what-is-this-javascript-require From what I can understand the required('discord.js') is loading the module saved in the
//node_modules files in a way that will make it globally accessible to javascript file. Use the website for more references.  
// require the necessary discord.js classes

// fs is Node's native file system module. Collection is a class that extends JavaScript's native Map class, and includes more extensive, useful functionality.
const fs  = require ('fs');
const {Client, Collection, Intents, Message, MessageEmbed, Permissions} = require ('discord.js');
const {token} = require ('./config.json');
const moduleClanFunctions = require('./clanFunctions.js');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS);
const client = new Client({ intents: myIntents});


client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	// Try catch statement. Try will attempt to execute the interaction otherwise it will reply with a message. 
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
    client.login(token);



/***************************************************************************************************************  
RESOURCES:
 Registering Slash Commands: https://discordjs.guide/interactions/registering-slash-commands.html#guild-commands
 Bot Link: https://discord.com/oauth2/authorize?client_id=900186070652690462&scope=bot&permissions=8589934591
 discord.js information: https://discordjs.guide/#before-you-begin.
 https://discordjs.guide/creating-your-bot/creating-commands.html#server-info-command.
 NODE,JS Documentation https://nodejs.org/docs/latest/api/modules.html
// For list of intents https://ziad87.net/intents/

*****************************************************************************************************************/

/*****************************************************************************************************************
 Notes:
First, fetch the command in the Collection with that name and assign it to the variable command. If the command 
doesn't exist, it will return undefined, so exit early with return. If it does exist, call the command's 
.execute() method, and pass in the interaction variable as its argument. In case something goes wrong,
log the error and report back to the member to let them know.
And that's it! Whenever you want to add a new command, make a new file in your commands directory, 
name it the same as the slash command, and then do what you did for the other commands. Remember to run node deploy-commands.js to register your commands!

This next step is how to dynamically retrieve your command files. The fs.readdirSync() method will return an array of all the file names
in a directory, e.g. ['ping.js', 'beep.js']. To ensure only command files get returned, use Array.filter() to leave out any non-JavaScript 
files from the array. With that array, loop over it and dynamically set your commands to the client.commands Collection. client.on(type, function);
async const instanceClient = new client.on( 'interactionCreate', interaction);

*****************************************************************************************************************/