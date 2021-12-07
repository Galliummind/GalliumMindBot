
// const discord = require('discord.js');


// /*This function will create a channel, the parameters will be filled and added to the (hopefully 0 location in wherever it is needed.
//     The name of the channel should be 'clanXXXXX' where x will be randomized characters using some sort of random selector function????
//     Resources: 
//     https://www.codegrepper.com/code-examples/javascript/discord.js+create+channel
//     https://discord.com/developers/docs/resources/guild#create-guild-channel
//     https://discord.js.org/#/docs/main/stable/class/GuildChannelManager?scrollTo=create
//        
//     const createClanChannel = function(client, message, channelID ) {
// var fiveChar = ("Clan " + makeid(5));
// console.log ("fiveChar = " + fiveChar);
// const channels = client.channels.cache.get(channelID);  
// client.channels.create('new-voice', {
//   type: 'GUILD_VOICE',  
//   permissionOverwrites: [
//      {
//        id: message.author.id,
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

// module.exports = {
//     welcomeMessage : welcomeMessage,
//     createClanChannel : createClanChannel,
// }


/* NOTES********************************************************************
 Node.JS uses modules to call libraries of functions (as in Java). 
 The syntax for "Exporting" a function externally is below. 
 exports.myDateTime = function () {
     return Date();
    };

    In order to add this module to your library you will need to use the require() method.
    const clanFunctions = require('./clanFunctions.js');

To Call on the actual function itself in main.js you would need 
****************************************************************************/   

// module.exports = (client) =>{
// const welcomeMessage = function () {
// const channel = client.channels.cache.get(channelID); //creating an object of type channel.
// console.log("function welcomeMessage has been called");
// channel.send("hello world! Please welcome our newest member ****This is the clanFunction FUNCTION!****"); //using the channel object, send a string + member user name.
// }
// }