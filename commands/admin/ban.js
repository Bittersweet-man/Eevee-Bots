const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: '?'
});
class BanCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: 'Bans a user'
        });
    }


    async run(message, args) {
        let BannedUser = message.guild.member(message.mentions.users.first());
        console.log(BannedUser)
        if (!BannedUser) {
            message.channel.send("Sorry, I cound't find that person");
            return;
        }
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(BannedUser).ban(reason)
        message.reply("Yee Haw")
        var channel = message.guild.channels.find("name", "modlogs");
        channel.send("A user was just banned! KBanned User " + BannedUser + " Banned By " + message.author)




    }
}



module.exports = BanCommand;