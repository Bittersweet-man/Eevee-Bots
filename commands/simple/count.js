const Commando = require('discord.js-commando');

var number = 1

class CountCommand extends Commando.Command
{
    constructor(client,)
        {
        super(client,{
            name: 'count',
            group: 'simple',
            memberName: 'count',
            description: 'ADMIN ONLY'
        });
    }

        
    async run(message, args)
    {
        if(!message.member.hasPermission("ADMINISTRATOR")){
            message.channel.send("You do not have permission!")
        }
        if(message.member.hasPermission("ADMINISTRATOR")){
            number++
        message.channel.send(number)
        }
    }
}
module.exports = CountCommand;