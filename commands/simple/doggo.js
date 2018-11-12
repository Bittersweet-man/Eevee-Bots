const Commando = require('discord.js-commando');
const superagent = require('superagent');
const discord = require('discord.js');
const bot = new Commando.Client()

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
        var dEmbed = new discord.RichEmbed()
            .setcolor(0xFF0000)
            .setAuthor('Sylveon Bot', message.guild.iconURL)
            .setImage(body.message)
            .setTimestamp()
            .setFooter('Sylveon Bot', bot.user.displayAvatarURL)

        message.channel.send({
            embed: dEmbed
        })
        message.delete();

    }
}

module.exports = DoggoCommand;