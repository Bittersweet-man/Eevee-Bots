const Commando = require('discord.js-commando');
const Discord = require('discord.js');
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
       // message.channel.send("test")
        //const msgs = await message.channel.awaitMessages(msg => {
         //   if(message.content != null){} return;
        //}, {
          //  time: 5000
       // });
       message.channel.send('Test')
.then(() => {
  message.channel.awaitMessages(response => response.content === 'test', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })})
  message.channel.send(`The collected message was: ${collected.first().content}`);
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