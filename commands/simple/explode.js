const Commando = require('discord.js-commando');

class ExplodeCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'explode',
            group: 'simple',
            memberName: 'explode',
            description: 'Make the bot go boom'
        });
    }


    async run(message, args) {
        message.channel.send('Are you sure you want to make me explode?')
        const msgs = await message.channel.awaitMessages(msg => {

            message.channel.send('I have gone kaplewy')

            console.log(msg.content);
            return msg.content;
        }, {
            time: 5000
        });
    }
}



module.exports = ExplodeCommand;