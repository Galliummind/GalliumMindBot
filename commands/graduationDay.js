const {SlashCommandBuilder} = require ('@discordjs/builders');

module.exports = {
data: new SlashCommandBuilder()
.setName('graduationday')
.setDescription('sets user description'),

async execute(interaction){
    await interaction.reply('It\'s graduation day!');
const members = [];
members = interaction.role.getmembers('red');
console.log(members);


},
}