const Commando = require('discord.js-commando');

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
        message.channel.send(message.guild.memberCount)
        var memberCount = new discord.RichEmbed()
            .setTitle("Members")
            .addField("Current Members", message.guild.memberCount, true)
            .setColor('RANDOM')
            .setFooter("woah thats a lot Owo")

        channel.send(memberCount);
    }
}
module.exports = MembersCommand;