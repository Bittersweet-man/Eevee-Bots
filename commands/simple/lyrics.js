const Commando = require('discord.js-commando');
var lyr = require('lyrics-fetcher');

class LyricsCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'lyrics',
            group: 'simple',
            memberName: 'lyrics',
            description: 'Get lyrics!(Of Sting)'
        });
    }


    async run(message, args) {
        lyr.fetch('twenty one pilots', args, function (err, lyrics) {
            if(args == null){
                message.reply('Please specify the song you want the lyrics for!')
                return;
            }
            if (lyrics.length > 2000) {
                lyrics = lyrics.substring(0, 1000);
                let words = lyrics.split(1000);
                message.reply("that song is to long!")
                message.channel.send('```' + words + '```')
                return;
            } {
                message.channel.send('```' + lyrics + '```');
            }

        });
    }
}

module.exports = LyricsCommand;