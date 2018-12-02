const Commando = require('discord.js-commando');
const discord = require('discord.js');

class EightBallCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: '8ball',
            group: 'simple',
            memberName: '8ball',
            description: 'Ask the 8 ball a question!'
        });
    }


    async run(message, args) {
        var chance = Math.floor(Math.random() * 20)
        if (chance == 0) {
            let answer = "it is certain."
            
        }
        if (chance == 1) {
            let answer = "It is decidedly so."
        }
        if (chance == 2) {
            let answer = "Without a doubt."
        }
        if (chance == 3) {
            let answer ="Yes - definetely."
        }
        if (chance == 4) {
            let answer ="You may rely on it."
        }
        if (chance == 5) {
            let answer ="As I see it, yes."
        }
        if (chance == 6) {
            let answer ="Most likely."
        }
        if (chance == 7) {
            message.channel.send("Outlook good.");
        }
        if (chance == 8) {
            let answer ="Yes."
        }
        if (chance == 9) {
            let answer ="Signs point to yes."
        }
        if (chance == 10) {
            let answer ="Reply hazy, try again."
        }
        if (chance == 11) {
            let answer ="Ask again later."
        }
        if (chance == 12) {
            let answer ="Better not tell you now."
        }
        if (chance == 13) {
            let answer ="Cannot predict now."
        }
        if (chance == 14) {
            let answer ="Concentrate and ask again."
        }
        if (chance == 15) {
            let answer ="Don't count on it."
        }
        if (chance == 16) {
            let answer ="My reply is no."
        }
        if (chance == 17) {
            let answer ="My sources say no."
        }
        if (chance == 18) {
            let answer ="Outlook not so good."
        }
        if (chance == 19) {
            let answer ="Very doubtful."
        }
        let BEmbed = new discord.RichEmbed()
            .setTitle('8Ball')
            .addField('Result', answer)
            .addField('Requested by', message.author)
            .setTimestamp()
            .setColor('RANDOM')
        message.channel.send({
            embed: BEmbed
        })
    }
}

module.exports = EightBallCommand;