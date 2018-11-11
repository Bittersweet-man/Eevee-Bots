const Commando = require('discord.js-commando');

class AnnouncementsCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'announcements',
            group: 'simple',
            memberName: 'announcements',
            description: 'Get notified for new announcements'
        });
    }
        
        
    async run(message, args)
    {
        message.reply('broken for now, just wanted it set up');
    }
}

module.exports = AnnouncementsCommand;