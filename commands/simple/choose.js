const Commando = require('discord.js-commando');

class ChooseCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'choose',
            group: 'simple',
            memberName: 'choose',
            description: 'Have the bot choose between two options!'
        });
    }
        
        
    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2)
        if(chance == 0){
            message.reply("Go with number 1!");
        }
        else
        { 
            message.reply("Go with number 2!");
        }
    }
}

module.exports = ChooseCommand;