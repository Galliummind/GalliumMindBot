const { MessageEmbed } = require('discord.js');

module.exports =  {
	name: 'guildMemberAdd',
	once: false,
	async execute(guildMemberAdd) {

		console.log('eventhandler, guildMemberAdd.js is detecting.');
		const EmbedWelcomeMessage = new MessageEmbed()
		// .setColor('#0099ff')
		.setTitle('Welcome to The Treehouse! 🌳')
		.setURL('https://cdn.shopify.com/s/files/1/1056/1844/products/custom_2543_close_grande.jpg?v=1623813275')
		// .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
		.setDescription('This community started out with a couple of Redditors, and now we have a Discord server to complement our subreddit.' + '\n \n' +
'This is a platform for people to build community and forge friendships in a fun and organic way. We want this to be a safe, inclusive' +
'space where everyone can meet other human beings and talk about all things life - so please read through the rules carefully -' + '\n \n' +
'ignorance is not an excuse for bad behavior. Breaking any rule warrants at least one strike, depending on the severity.' + '\n \n' +

'= **RULES** =' + '\n \n' +

'🍃  Be kind and respectful. Respect everyone as a person - no bullying or sexual harassment. Do not discriminate or use prejudicial language in the context of race, gender, sexual orientation, etc. Hate speech, trolling, and harassment is not tolerated - both in server and through DMs.' + '\n \n' +

'🍃 Do not approach people with unsolicited sexual advances, flirting, or any unwanted inappropriate questions/comments - nsfw or not. Always check for consent first, or you’ll be subjected to an immediate ban. This refers to mainly DMs/personal messages, but regardless - if someone asks you to stop, then stop. We need everyone to feel safe. ' + '\n \n' +

'🍃  If someone, especially a moderator, asks you to stop a  certain behavior, stop immediately. Mods may ask you to stop certain behaviors if they believe it is harming the server.' + '\n \n' +

'🍃  Do not lie about your identity.' + '\n \n' +

'🍃  No NSFW content, such as text-based memes, pornographic imagery, and graphic details of NSFW acts. If you want to bring up a mature topic, please get a moderator\'s approval.' + '\n \n' +

'🍃  No spam, promotions, or  advertisement. Do not promote other Discord servers, services, etc.' + '\n \n' +

'🍃  Don\'t DM others unless they have the DMs Open role on their profile. If they have the Ask For Permission role or no role regarding DMs, then explicitly ask for permission to DM. If at any point they say they would like to keep chats to the server, then respect that.' + '\n \n' +

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
		
		const channel = guildMemberAdd.client.channels.cache.get('875933356620144722');
		channel.send({ embeds: [EmbedWelcomeMessage] });
		// createClanChannel(guildMemberAdd);
	}
};


// NOT **** THIS FUNCTION IS NOT READY ****


//     const createClanChannel = function(guildMemberAdd, client) {
// var fiveChar = ("Clan " + makeid(5));
// console.log ("fiveChar = " + fiveChar);
// // const channels = guildMemberAdd.client.channels.cache.get('875933356620144722');  
// guildMemberAdd.client.channels.create('new-voice', {
//   type: 'GUILD_VOICE',  
//   permissionOverwrites: [
//      {
//        id: guildMember.client.user.id,
//        deny: [Permissions.FLAGS.VIEW_CHANNEL],
//     },
//   ],
// })
// }

// // Taken from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }

// .setDescription('This community started out with a couple of Redditors, and now we have a Discord server to complement our subreddit.' + '\n' +
// 'This is a platform for people to build community and forge friendships in a fun and organic way. We want this to be a safe, inclusive' + '\n' +
// 'space where everyone can meet other human beings and talk about all things life - so please read through the rules carefully -' + '\n' +
// 'ignorance is not an excuse for bad behavior. Breaking any rule warrants at least one strike, depending on the severity.' + '\n' +

// '= RULES =' + '\n' +

// '🍃  Be kind and respectful. Respect everyone as a person - no bullying or sexual harassment. Do not discriminate or use prejudicial language in the context of race, gender, sexual orientation, etc. Hate speech, trolling, and harassment is not tolerated - both in server and through DMs.' + '\n' +

// '🍃 Do not approach people with unsolicited sexual advances, flirting, or any unwanted inappropriate questions/comments - nsfw or not. Always check for consent first, or you’ll be subjected to an immediate ban. This refers to mainly DMs/personal messages, but regardless - if someone asks you to stop, then stop. We need everyone to feel safe. ' + '\n' +

// '🍃  If someone, especially a moderator, asks you to stop a  certain behavior, stop immediately. Mods may ask you to stop certain behaviors if they believe it is harming the server.' + '\n' +

// '🍃  Do not lie about your identity.' + '\n' +

// '🍃  No NSFW content, such as text-based memes, pornographic imagery, and graphic details of NSFW acts. If you want to bring up a mature topic, please get a moderator\'s approval.' + '\n' +

// '🍃  No spam, promotions, or  advertisement. Do not promote other Discord servers, services, etc.' + '\n' +

// '🍃  Don\'t DM others unless they have the DMs Open role on their profile. If they have the Ask For Permission role or no role regarding DMs, then explicitly ask for permission to DM. If at any point they say they would like to keep chats to the server, then respect that.' + '\n' +

// 'If you\'re unsure about something, contact a moderator. Please don\'t be the reason why we need to make more rules.')