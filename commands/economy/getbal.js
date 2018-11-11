const Commando = require('discord.js-commando');
const eco = require('discord-economy');

class SetbalCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'getbal',
            group: 'economy',
            memberName: 'getbal',
            description: 'Get Balance(ADMINS ONLY)'
        });
    }


    async run(message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.reply("You don\'t have permission!")
            return;
        }
        eco.FetchBalance(message.author.id).then(l => {
            message.channel.send(`Hey ${message.author.tag}! You own ${l.balance} coins.`);
        })
    }
};

module.exports = GetbalCommand