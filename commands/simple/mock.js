const Commando = require('discord.js-commando');

class MockCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'mock',
            group: 'simple',
            memberName: 'mock',
            description: 'Make fun of another use. Fun for the whole family!'
        });
    }


    async run(message, args) {
        const mockedUser = message.guild.member(message.mentions.users.first())
        message.delete()
        let words = args.split(' ');
        let reason = words.slice(1).join(message.guild.member(message.mentions.users.first()));
         message.channel.send(message.author + " just mocked "+ mockedUser + " for " + reason)
         console.log(reason)
    }

}

module.exports = MockCommand;