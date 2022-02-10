const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prefix')
		.setDescription('Lets user change the prefix'),
	async execute(interaction) {
        if (interaction === 'prefix') {
            // if there's at least one argument, set the prefix
            if (args.length) {
                await prefixes.set(message.guild.id, args[0]);
                return message.channel.send(`Successfully set prefix to \`${args[0]}\``);
            }
            return message.channel.send(`Prefix is \`${await prefixes.get(message.guild.id) || globalPrefix}\``);
        }
	},
};