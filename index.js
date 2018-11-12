const Commando = require('discord.js-commando');
const TOKEN = process.env.TOKEN;
const bot = new Commando.Client({
    commandPrefix: "?",
    owner: "462709446121095169",
    owner: "413754421365964800"
})
const ytdl = require('ytdl-core');
const discord = require('discord.js');
var lyr = require('lyrics-fetcher');


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('admin', 'Admin');

bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login(TOKEN);

global.servers = {};
var playQueue = [];

bot.on('ready', () => {
    console.log("Ready");
    const channel = bot.channels.get('500380461391020042')
    channel.send("I am online!")
    bot.user.setActivity("Type ?help", {
        type: 'PLAYING'
    })
});

bot.on("guildMemberAdd", function (member) {
    if (member.guild.id == 465707591910162432) {
        member.send("Hello! Welcome to sylveon land, here we meme the crap out of our existence! Read #welcome-rules before typing away!");
        var channel = bot.channels.get('500450322347589632')
        var guild = 465707591910162432
        var rules = bot.channels.get('473670157948944384')
        var accept = bot.channels.get('511355112652800010')
        var thumbnail = member.id.avatarURL
        var welcome = new discord.RichEmbed()
            .setTitle("Welcome!")
            .addField("New Member", "New member " + member + " has joined! Give then a warm welcome!", true)
            .addField("Rules", "Make sure to read " + rules + " and do \'accept\' in" + accept + " to get access to the server!", true)
            .setDescription("You're user " + member.guild.memberCount)
            .setColor('RANDOM')
            .setThumbnail(member.avatarURL)
            .setFooter("Welcome to the server!")

        channel.send(welcome);
    }
    if (member.guild.id == 510974262769614918) {
        var channel = bot.channels.get('510974262769614921')
        channel.send('someone joined kk')
    }

});

bot.on("guildMemberRemove", function (member) {
        if (member.guild.id == 465707591910162432) {
            var channel = bot.channels.get('500450322347589632')
            var guild = 465707591910162432
            channel.send('**I\'m sorry that ' + member.displayName + " has left us. oof.**")
        }
    }

);

bot.on('message', function (message) {
    if (message.content == "accept") {
        message.reply('You have been accepted to the Sylveon Squad!')
        message.member.addRole('473668077754777602')
    }
})
