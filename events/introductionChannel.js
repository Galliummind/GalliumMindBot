module.exports ={
    name: 'messageCreate',
    event: 'messageCreate',
    once: false, 

     execute(messageCreate){

        // console.log(`in #${messageCreate.url} by user ${messageCreate.member.displayName}`);
        // // messageCreate.delete();
       
       if (messageCreate.content === 'GM'){
        messageCreate.reply('Galliummind FTW');
    }
}
};
