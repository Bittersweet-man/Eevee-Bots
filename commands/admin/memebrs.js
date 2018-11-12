const Commando = require('discord.js-commando');
const discord = require('discord.js');

class MembersCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'members',
            group: 'admin',
            memberName: 'members',
            description: 'Get the member count!'
        });
    }


    async run(message, args) {
        var channel = message.channel
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        var memberCount = new discord.RichEmbed()
            .setTitle("Members")
            .addField("Current Members", message.guild.memberCount, true)
            .setColor('RANDOM')
            .setFooter("woah thats a lot Owo")

        channel.send(memberCount);
    }
}
module.exports = MembersCommand;