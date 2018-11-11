const Commando = require('discord.js-commando');

class TimerCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'timer',
            group: 'simple',
            memberName: 'timer',
            description: 'Set a timer for a certain amout of minutes!'
        });
    }


    async run(message, args) {
        console.log(args)
        message.channel.send(args)
        setTimeout(function () {
            message.channel.send('Your timer has run out!')
        }, args * 60000);
    }

}

module.exports = TimerCommand;