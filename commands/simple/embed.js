var myInfo = new discord.RichEmbed()
             .setTitle("All about Sylveon!")
             .addField("About Me", "Hello, my name is Greg, and I am the owner of this fine server! BitterSweet Man is the king! Bow down to him!", true)   
             .addField("Music", "I am a pretty sweet musician. Check it out!", true)   
             .setDescription("Hello, my name is Greg!")
             .setColor(0xFF0000)
             .setThumbnail("https://cdn.discordapp.com/avatars/413754421365964800/d11fedaa7a0e6ad43b1aeef8e62655d9.png?size=2048")
             .setURL("https://youtu.be/m7gnQ2CiXHA")
             .setFooter("Thanks for reading. I hope you learned a little about me :D")


       message.channel.send(myInfo);      