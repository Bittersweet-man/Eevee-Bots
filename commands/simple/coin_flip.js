const Commando = require('discord.js-commando');
const discord = require('discord.js');

class CoinFlipCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Flips a coin, landing on either Heads or Tails'
        });
    }


    async run(message, args) {
        var chance = Math.floor(Math.random() * 2)
        if (chance == 0) {
            var results = 'heads'
            // message.reply("Your coin landed on Heads!", {files: [__dirname + "/CoinPics/heads.jpg"]});
        } else {
            var results = 'tails'
            //message.reply("Your coin landed on Tails!", {files: [__dirname + "/CoinPics/tails.jpg"]});;
        }
        if (results == 'tails') {
            var image = 'https: //mbtskoudsalg.com/images/quarter-tail-png-7.png '

        } else {
            var image = 'https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Heads.png'
        }



        let fEmbed = new discord.RichEmbed()
            .setTitle('Flip')
            .addField('Result', 'Your coin landed on ' + results)
            .addField('Requested by', message.author)
            .setDescription("A coin was flipped!")
            .setTimestamp()
            .setColor('RANDOM')
            .setImage(image)
        message.channel.send({
            embed: fEmbed
        })
    }
}

module.exports = CoinFlipCommand;