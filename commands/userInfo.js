const {SlashCommandBuilder} = require ('@discordjs/builders');

module.exports = {
data: new SlashCommandBuilder()
.setName('user-name')
.setDescription('sets user description'),

async execute(interaction){
    await interaction.reply('user command goes here');
},
}