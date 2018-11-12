const Commando = require('discord.js-commando');

class SpamsylvCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'spam',
            group: 'admin',
            memberName: 'spam',
            description: 'Spam sylveon'
        });
    }


    async run(message, args) {
        var channel = message.channel
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        var sylveon = '413754421365964800'
        message.channel.send(sylveon)
        message.channel.send(sylveon)
        message.channel.send(sylveon)
        message.channel.send(sylveon)
        message.channel.send(sylveon)
        message.channel.send(sylveon)
        message.channel.send(sylveon)
    }
}
module.exports = SpamsylvCommand;