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
        if(message.guild.id == 465707591910162432){
            let announcementRole = member.guild.roles.find("name", "announcements");
        message.author.addRole(announcementRole);
        message.reply('You have recaived the announcements role!');
        }
    }
}

module.exports = AnnouncementsCommand;