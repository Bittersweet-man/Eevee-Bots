const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: '?'
});
class KickCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'Kicks a user'
        });
    }


    async run(message, args) {
        let kickedUser = message.guild.member(message.mentions.users.first());
        console.log(kickedUser)
        if (!kickedUser) {
            message.channel.send("Sorry, I cound't find that person");
            return;
        }
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(kickedUser).kick(reason)
        message.reply("Yee Haw")
        var channel = message.guild.channels.find("name", "modlogs");
        channel.send("A user was just kicked! Kicked User " + kickedUser + " Kicked By " + message.author)




    }
}



module.exports = KickCommand;