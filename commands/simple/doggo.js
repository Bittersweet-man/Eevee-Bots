const Commando = require('discord.js-commando');
const superagent = require('superagent');

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
        let msg = await message.channel.send("Generating...")
        let {
            body
        } = await superagent
            .get('https://dog.ceo/api/breeds/image/random')
        //console.log(body.file)
        if (!{
                body
            }) return message.channel.send('I broke! Please try again!')
        message.channel.send(body.message)

    }
}

module.exports = DoggoCommand;