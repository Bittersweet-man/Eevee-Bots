const Commando = require('discord.js-commando');

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
            message.channel.send("it is certain.");
        }
        if (chance == 1) {
            message.channel.send("It is decidedly so.");
        }
        if (chance == 2) {
            message.channel.send("Without a doubt.");
        }
        if (chance == 3) {
            message.channel.send("Yes - definetely.");
        }
        if (chance == 4) {
            message.channel.send("You may rely on it.")
        }
        if (chance == 5) {
            message.channel.send("As I see it, yes.");
        }
        if (chance == 6) {
            message.channel.send("Most likely.");
        }
        if (chance == 7) {
            message.channel.send("Outlook good.");
        }
        if (chance == 8) {
            message.channel.send("Yes.");
        }
        if (chance == 9) {
            message.channel.send("Signs point to yes.");
        }
        if (chance == 10) {
            message.channel.send("Reply hazy, try again.");
        }
        if (chance == 11) {
            message.channel.send("Ask again later.");
        }
        if (chance == 12) {
            message.channel.send("Better not tell you now.");
        }
        if (chance == 13) {
            message.channel.send("Cannot predict now.");
        }
        if (chance == 14) {
            message.channel.send("Concentrate and ask again.");
        }
        if (chance == 15) {
            message.channel.send("Don't count on it.");
        }
        if (chance == 16) {
            message.channel.send("My reply is no.");
        }
        if (chance == 17) {
            message.channel.send("My sources say no.");
        }
        if (chance == 18) {
            message.channel.send("Outlook not so good.");
        }
        if (chance == 19) {
            message.channel.send("Very doubtful.");
        }
    }
}

module.exports = EightBallCommand;