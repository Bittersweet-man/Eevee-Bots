const Commando = require('discord.js-commando');

class DoggoCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'doggo',
            group: 'simple',
            memberName: 'doggo',
            description: 'doggo'
        });
    }


    async run(message, args) {
        let promise = 'resolve'
        let dog = await superAwait
            .get(`https://random.dog/woof.json`)
        message.channel.send(dog)

    }
}

module.exports = DoggoCommand;