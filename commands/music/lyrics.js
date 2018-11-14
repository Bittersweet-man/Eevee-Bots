const Commando = require('discord.js-commando');
var lyr = require('lyrics-fetcher');

class LyricsCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'lyrics',
            group: 'music',
            memberName: 'lyrics',
            description: 'Get lyrics!(Of Sting)'
        });
    }


    async run(message, args) {
    message.reply('What artist are you looking for?')
    const msgs = await message.channel.awaitMessages(msg => { 
        if(message.author.bot){

        }
        else {
        console.log(msg.content) ;
        message.channel.send('Your artist is ' + msg.content)
        }
    }, {time: 5000});

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