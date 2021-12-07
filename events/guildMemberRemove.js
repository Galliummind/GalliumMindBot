const { MessageEmbed, GuildMember } = require('discord.js');

module.exports =  {
	name: 'guildMemberRemove',
	once: false,
	async execute(guildMemberRemove) {

		console.log('*****************************eventhandler, guildMemberRemove.js has been activated.****************************');
    }
};


/**
 * NOTES
 * Members cannot be Dm if they have left the server since the bot can only communicate with members within the server it controls. Exception would be if the member
 * leaves a server, but still has connections with the bot in at least one other server. 
 */
        // const user =guildMemberRemove.user.id;
        // console.log('member: ' + user);
        // guildMemberRemove.user.send('content');
