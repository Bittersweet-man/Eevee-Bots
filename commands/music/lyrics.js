const Commando = require('discord.js-commando');
const bot = new Commando.Client()
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
        const msgs = await message.channel.awaitMessages(msg => {
            if(msg.content != null){} return;
            message.channel.send('Your artist is ' + msg.content);
        }, {
            time: 5000
        });

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