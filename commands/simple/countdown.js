const Commando = require('discord.js-commando');

class CountDownCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'countdown',
            group: 'simple',
            memberName: 'countdown',
            description: 'Start a countdown from 5'
        });
    }


    async run(message, args) {
        message.delete()
        message.channel.send('5')
        setTimeout(function () {
            message.channel.send('4')
        }, 1000);
        setTimeout(function () {
            message.channel.send('3')
        }, 2000);
        setTimeout(function () {
            message.channel.send('2')
        }, 3000);
        setTimeout(function () {
            message.channel.send('1')
        }, 4000);
        setTimeout(function () {
            message.channel.send({files: [__dirname + "/explosionPic/boom.jpg"]})
        }, 5000);
    }
}

module.exports = CountDownCommand;