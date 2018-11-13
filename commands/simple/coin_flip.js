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
        if(results == 'tails'){
            var image = 'https://www.google.com/search?rlz=1C1GCEU_enUS821US821&biw=1360&bih=626&tbm=isch&sa=1&ei=3EzqW_OOL4fI8APZ37rACg&q=coin+tai%3Bs+png&oq=coin+tai%3Bs+png&gs_l=img.3...44755.45388..45581...0.0..0.158.505.3j2......1....1..gws-wiz-img.......0i7i30j0i8i7i30.HqthOGD1WNc#imgrc=3P9luPC6xgGO_M:'
        }
        else{
            var image = 'https://www.google.com/search?q=coin+heads+png&rlz=1C1GCEU_enUS821US821&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjJqqqPvtDeAhUjwlQKHU5tAvQQ_AUIEygB&biw=1360&bih=626#imgrc=wcq63vmxowogrM:'
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