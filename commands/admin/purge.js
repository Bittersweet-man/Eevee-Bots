const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client()

class PurgeCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'purge',
            group: 'admin',
            memberName: 'purge',
            description: 'purge'
        });
    }


    async run(message, args) {
        var channel = message.channel
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        var channel = message.guild.channels.find("name", "modlogs");
        //channel.bulkDelete(args)
        let pEmbed = new discord.RichEmbed()
            .setTitle('Purge')
            .addField('Puged Messaged', message.author + ' just purged ' + args + ' messages')
            .addField('Channel', message.channel)
            .setFooter("Thanks for keeping the chats clean")
            .setTimestamp()
            .setColor(0x228B22)
        channel.send({
            embed: pEmbed
        })

    }
}
module.exports = PurgeCommand;