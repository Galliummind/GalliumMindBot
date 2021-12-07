// commonjs standards applied “var VariableName = require(‘moduleId_or_pathToModule’);”
// example https://medium.com/@cgcrutch18/commonjs-what-why-and-how-64ed9f31aa46

//To include the module we need to type  require() function and the name of the module.


const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!!'),
	async execute(interaction) {
		return interaction.reply('Pong!');
	},
};