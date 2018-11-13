const Commando = require('discord.js-commando');

class SpamBitCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'spambit',
            group: 'admin',
            memberName: 'spambit',
            description: 'Spam Bittersweet'
        });
    }


    async run(message, args) {
        var channel = message.channel
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        var sylveon = '413754421365964800'
        message.channel.send('<@462709446121095169>')
        message.channel.send('<@462709446121095169>')
        message.channel.send('<@462709446121095169>')
    }
}
module.exports = SpamBitCommand;