const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Commando.Client()
const filter = m => m.content.startsWith('a');
var lyr = require('lyrics-fetcher');

class LyricsCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'lyrics',
            group: 'music',
            memberName: 'lyrics',
            description: 'Get lyrics!'
        });
    }


    async run(message, args) {
        const msgs = await message.channel.awaitMessages(filter, { max: 1 })
            .then(async collected => {
                var response = collected.array()[0];
                message.channel.send(msgs.content)
            })
            
       
        //message.channel.send('Your artist is ' + msgs.content);
        //lyr.fetch(artist, song, function (err, lyrics) {
        //  if (args == null) {
        //    message.reply('Please specify the song you want the lyrics for!')

        //}
        //    if (lyrics.length > 2000) {
        //     var lyrics = lyrics.substring(0, 2000);
        //    let words = lyrics.split(2000);
        //                message.channel.send('```' + words + '```')
        //          } {
        //            if (lyrics.length < 2000) {
        //              message.channel.send('```' + lyrics + '```');
        //        }
        //  } {
        //    if (lyrics.length > 2000) {
        //    var lyrics2 = lyrics.slice(-1000);
        //    message.channel.send('```' + lyrics2 + '```')

        //                }
        //          }

        //     });
    }
}

module.exports = LyricsCommand;