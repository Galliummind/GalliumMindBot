const { Role } = require("discord.js");
const roleName = '895799673963577404';

module.exports = {
name: 'ready',
once: true,
description: 'setInterval will check to see if new members are cub scouts, if true remove the \'new\' role',

execute(){

}
}

/**
 * Create a list of members with the role x.
 * 
 * Go through each member with the role x and check to see if they have a cub scout or higher role.
 * 
 * If they have a cub scout role -- remove the 'new' role. 
 * 
 * otherwise check the next member. <LOOP>
 * 
 * 
 * RESOURCES
 * 
 * https://github.com/bpbuch/discord-role-bot/blob/master/index.js
 */