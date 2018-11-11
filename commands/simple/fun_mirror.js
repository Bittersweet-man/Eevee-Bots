const Commando = require('discord.js-commando');

class FunMirrorCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'fun_mirror',
            group: 'simple',
            memberName: 'fun_mirror',
            description: 'Look at your reflection in a mirror!'
        });
    }
        
        
    async run(message, args)
    {
        message.reply(message.author.avatarURL);
    }
}

module.exports = FunMirrorCommand;