const Commando = require('discord.js-commando');
const bot = new Commando.Client()

class RestartCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'r',
            group: 'admin',
            memberName: 'r',
            description: 'Restart the bot'
        });
    }


    async run(message, args) {
        var channel = message.channel
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't have permissions to use this command!");
            return;
        }
        bot.destroy()
    }
}
module.exports = RestartCommand;