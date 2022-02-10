
    const { MessageEmbed } = require('discord.js');
    const { SlashCommandBuilder } = require('@discordjs/builders');
    module.exports = {
        data: new SlashCommandBuilder()
            .setName('snapshot') //must be lowercase
            .setDescription('Rules for snapshot'),
        async execute(interaction) {

            const EmbedMessage = new MessageEmbed() 
            // .setColor('#0099ff')
            .setTitle('Rules About Snapshots🍃')
            .setURL('https://cdn.shopify.com/s/files/1/1056/1844/products/custom_2543_close_grande.jpg?v=1623813275')
            // .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
            .setDescription('Please do not take screenshots without asking for permission first.' + '\n' +'If you\'re unsure about something, contact a moderator. Please don\'t be the reason why we need to make more rules.')
            .setThumbnail('https://cdn.shopify.com/s/files/1/1056/1844/products/custom_2543_close_grande.jpg?v=1623813275')
            // .addFields(
            // 	{ name: 'Regular field title', value: 'Some value here' },
            // 	{ name: '\u200B', value: '\u200B' },
            // 	{ name: 'Inline field title', value: 'Some value here', inline: true },
            // 	{ name: 'Inline field title', value: 'Some value here', inline: true },
            // )
            // .addField('Inline field title', 'Some value here', true)
            // .setImage('https://i.imgur.com/AfFp7pu.png')
            // .setTimestamp()
            // .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

            return interaction.reply({ embeds: [EmbedMessage] });
        },
    };

    /**
 * RULES TEMPLATE
 *
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('RULENAME!')
		.setDescription('Rule'),
	async execute(interaction) {
		return interaction.reply({ embeds: [EmbedMessage] });
	},
};

const EmbedMessage = new MessageEmbed()
		// .setColor('#0099ff')
		.setTitle('Rules About Snapshots🍃')
		.setURL('https://cdn.shopify.com/s/files/1/1056/1844/products/custom_2543_close_grande.jpg?v=1623813275')
		// .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
		.setDescription('Please do not take screenshots without FIRSTasking permission.'

'If you\'re unsure about something, contact a moderator. Please don\'t be the reason why we need to make more rules.')
		.setThumbnail('https://cdn.shopify.com/s/files/1/1056/1844/products/custom_2543_close_grande.jpg?v=1623813275')
		// .addFields(
		// 	{ name: 'Regular field title', value: 'Some value here' },
		// 	{ name: '\u200B', value: '\u200B' },
		// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
		// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
		// )
		// .addField('Inline field title', 'Some value here', true)
		// .setImage('https://i.imgur.com/AfFp7pu.png')
		// .setTimestamp()
		// .setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');
	}
 */