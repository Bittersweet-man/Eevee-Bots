const Commando = require('discord.js-commando');

class AliveCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'alive',
            group: 'simple',
            memberName: 'alive',
            description: 'Test to see if the bot is alive'
        });
    }
        
        
    async run(message, args)
    {
       message.reply("Yes, I am alive!")
    }
}

module.exports = AliveCommand;