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
        if (!BannedUser) {
            message.channel.send("Sorry, I cound't find that person");
            return;
        }
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        if(reason == null){
            let reason = "Reason was not specified"
        }
        message.guild.member(BannedUser).ban(reason)
        message.reply("Alright, user " + BannedUser.displayName + " has been banned.")
        var channel = message.guild.channels.find("name", "modlogs");
        let bEmbed = new discord.RichEmbed()
            .setTitle('Ban')
            .addField('Banned User', BannedUser)
            .addField('Banned By', message.author)
            .addField("Reason", reason)
            .setDescription("A user was banned!")
            .setTimestamp()
            .setColor(0xFF0000)
        channel.send({
            embed: bEmbed
        })




    }
}



module.exports = BanCommand;