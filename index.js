const Commando = require('discord.js-commando');
const TOKEN = process.env.TOKEN;
const commandPrefix = '?'
const bot = new Commando.Client({commandPrefix: "/", owner: "462709446121095169", owner: "413754421365964800"})
const ytdl = require('ytdl-core');

var prefix = commandPrefix
const discord = require('discord.js');


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('math', 'Math');
bot.registry.registerGroup('welcome', 'Welcome');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login(TOKEN);

global.servers = {};
var playQueue = [];

bot.on('ready', () => {
    console.log("Ready");
    const channel = bot.channels.get('500380461391020042')
    channel.send("I am online!")
    bot.user.setActivity("Type /help", {
        type: 'WATCHING'
    })
});






bot.on('message', function (message) {
    if (message.content == commandPrefix + 'hello') {
        message.channel.send('Hello ' + message.author + ', how are you?');
    }
    if (message.content == "Join") {
        message.member.send("Welcome to the server!");
        let memberRole = message.member.guild.roles.find("name", "Newcomer");
        message.member.addRole(memberRole);
        var channel = bot.channels.get('500450322347589632')
        channel.send(message.author + ", Hello! Welcome to Sylveon Land, here we meme the crap out of our existence! Read #welcome-rules before typing away!")
    }

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
    if (message.content == 'shut up'){
        message.channel.send("no")
    }
    if (message.content == 'welcome channel'){
    message.channel.send(welcomeChannel)
    }
    if(message.content == 'queue'){
        message.channel.send(playQueue)
    }

})