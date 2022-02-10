const { MessageEmbed } = require("discord.js");
const { quesArray } = require("../QuestionsForNewcomers.js");
var arr = require("../QuestionsForNewcomers.js").quesArray;
var randomNumbers = require("../QuestionsForNewcomers.js").getRandomNumber;
/**
 * If a message is detected in the introduction channel. Then create an embeded message
 * Then create an embeded message
 * Send the embeded message to general chat. 
 * */ 
module.exports ={
    name: 'messageCreate',
    event: 'messageCreate',
    once: false, 

     execute(messageCreate){
         
        const introductionChannelId = ("870188429042937866"); // introduction channel being monitored
        const channel = messageCreate.client.channels.cache.get("868947749729607713"); // General chat channel id

        if (messageCreate.channelId === introductionChannelId){

     const userMessage = messageCreate.content;
     const userName = messageCreate.author;
     console.log(userMessage);       
    //create a new embeded message
    const embededMessage = new MessageEmbed()
    // .setColor('#0099ff')
.setTitle('Welcome to The Treehouse! 🌳')
//  .setURL('https://cdn.shopify.com/s/files/1/1056/1844/products/custom_2543_close_grande.jpg?v=1623813275')
// .setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
.setDescription("Everyone, please give a warm welcome to " + '<@'+userName+'>' + "\n\n"+ userMessage + "\n\n" + "**"+randomNumbers()+"**")
.setThumbnail(messageCreate.author.avatarURL())
// .setThumbnail("https://distok.top/stickers/817709667701751820/819139728128344064.gif")
// .addFields(
// 	{ name: 'Regular field title', value: 'Some value here' },
// 	{ name: '\u200B', value: '\u200B' },
// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
// )
// .addField('Inline field title', 'Some value here', true)
// .setImage('https://i.imgur.com/AfFp7pu.png')
// .setTimestamp()
.setFooter('Welcome!', "https://distok.top/stickers/817709667701751820/819139728128344064.gif");
    // Second section send to channel.
    channel.send({embeds:[embededMessage]});
}
}
};
