const Commando = require('discord.js-commando');
const TOKEN = process.env.TOKEN;
const bot = new Commando.Client({
    commandPrefix: "?",
    owner: "462709446121095169",
    owner: "413754421365964800"
})
const ytdl = require('ytdl-core');
const discord = require('discord.js');


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
        let memberRole = member.guild.roles.find("name", "Newcomer");
        member.addRole(memberRole);
        var channel = bot.channels.get('500450322347589632')
        var thumbnail = member.avatarURL
        var welcome = new discord.RichEmbed()
            .setTitle("Welcome!")
            .addField("New Member", "New member " + member + " has joined! Give then a warm welcome!", true)
            .setDescription("You're user 3274732")
            .setColor('RANDOM')
            .setThumbnail(thumbnail)
            .setFooter("Welcome to the server!")

        channel.send(welcome);
        var channel = 500380461391020042
        channel.send(thumbnail)
    }
    if (member.guild.id == 510974262769614918) {
        var channel = bot.channels.get('510974262769614921')
        channel.send('someone joined kk')
    }

});





bot.on('message', function (message) {
    if (message.content.includes('die')) {
        message.channel.send('please dont')
    }


    if (message.content.includes('twenty one pilots')) {
        message.channel.send('they\'re emo dont @ me')
    }

    if (message.content.includes('Jack')) {
        message.channel.send('HE IS BOT DADDY')
    }

    if (message.content.includes('jack')) {
        message.channel.send('HE IS BOT DADDY')
    }

    if (message.content.includes('bittersweet')) {
        message.channel.send('HE IS BOT DADDY')
    }

    if (message.content.includes('Bittersweet')) {
        message.channel.send('HE IS BOT DADDY')
    }

    if (message.content.includes('Joshler')) {
        message.react('🤢')
    }
    if (message.content == 'shut up') {
        message.channel.send("no")
    }
    if (message.content == 'welcome channel') {
        message.channel.send(welcomeChannel)
    }
})
