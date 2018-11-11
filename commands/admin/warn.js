const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: '?'
});
class WarnCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'warn',
            group: 'admin',
            memberName: 'warn',
            description: 'warn a user'
        });
    }


    async run(message, args) {
        let warnedUser = message.guild.member(message.mentions.users.first());
        console.log(warnedUser)
        if (!warnedUser) {
            message.channel.send("Sorry, I cound't find that person");
            return;
        }
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        var channel = message.guild.channels.find("name", "modlogs");
        channel.send("A user was just warned! Warned User " + warnedUser + " warned By " + message.author)




    }
}



module.exports = WarnCommand;