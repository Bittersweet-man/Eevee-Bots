const Commando = require('discord.js-commando');

class AnnouncementsCommand extends Commando.Command {
    constructor(client, ) {
        super(client, {
            name: 'announcements',
            group: 'simple',
            memberName: 'announcements',
            description: 'Get notified for new announcements'
        });
    }


    async run(message, args) {
        if (message.guild.id == 465707591910162432) {
            message.author.addrole('511266254615740437')
            message.reply('yeet')
        }
    }
};

module.exports = AnnouncementsCommand;