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
        let wEmbed = new discord.RichEmbed()
        .setTitle('Warn')
        .addField('Warned User', warnedUser)
        .addField('Warned By', message.author)
        .setDescription("A user was warned!")
        .setTimestamp()
        .setColor(0xFFFF00)
    channel.send({
        embed: wEmbed
    })




    }
}



module.exports = WarnCommand;