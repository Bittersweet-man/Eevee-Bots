const Commando = require('discord.js-commando');

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
        channel.bulkDelete(args)
    }
}
module.exports = PurgeCommand;