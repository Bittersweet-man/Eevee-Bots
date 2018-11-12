const Commando = require('discord.js-commando');

class CreateCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'create',
            group: 'admin',
            memberName: 'create',
            description: 'Create a channel!'
        });
    }


    async run(message, args) {
        var channel = message.channel
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        message.guild.createChannel(args, 'text')
        allow: ['ADMIN_PERMS']
    }
}
module.exports = CreateCommand;