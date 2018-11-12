const Commando = require('discord.js-commando');

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
        lyr.fetch('Sting', 'Shape of my heart', function (err, lyrics) {
            message.channel.send(err || lyrics);
        });
    }
}

module.exports = LyricsCommand;