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
        lyr.fetch('Legend', function (err, lyrics) {
            message.channel.send(err || lyrics);
        });
    }
}

module.exports = LyricsCommand;