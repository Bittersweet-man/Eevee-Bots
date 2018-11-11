var welcome = new discord.RichEmbed()
    .setTitle("Welcome!")
    .addField("New Member", "New member " + member + " has joined! Give then a warm welcome!", true)
    .setDescription("You're user 3274732")
    .setColor('RANDOM')
    .setThumbnail(membe.avatarURL)
    .setFooter("Welcome to the server!")

message.channel.send(welcome);