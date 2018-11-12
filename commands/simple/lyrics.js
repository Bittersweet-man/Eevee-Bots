const Commando = require('discord.js-commando');
var lyr = require('lyrics-fetcher');

class LyricsCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'lyrics',
            group: 'simple',
            memberName: 'lyrics',
            description: 'Get lyrics!(Of Sting)'
        });
    }
        
        
    async run(message, args)
    {
        lyr.fetch('twenty one pilots', args, function (err, lyrics) {
            if(lyric.length > 2000) str = str.substring(0,10);{
                message.reply("that song is to long!")
                return;
            }
            message.channel.send(err || lyrics);
        });
    }
}

module.exports = LyricsCommand;