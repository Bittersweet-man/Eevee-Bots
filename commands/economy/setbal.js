const Commando = require('discord.js-commando');

class SetbalCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'setbal',
            group: 'economy',
            memberName: 'setbal',
            description: 'Set Balance(ADMINS ONLY)'
        });
    }


    async run(message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.reply("You don\'t have permission!")
            return;
        }
        eco.SetBalance(message.author.id, 500)
    }
};

module.exports = SetbalCommand

