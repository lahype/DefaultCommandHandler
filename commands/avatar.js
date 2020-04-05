const Discord = require('discord.js')
exports.run = async (bot, msg) => {
    const AvatarEmbed = new Discord.MessageEmbed()
    await msg.channel.send(AvatarEmbed
        .setColor('RED')
        .setDescription(`And here it is!\nOr [click here](${msg.author.displayAvatarURL()}).`)
        .setThumbnail(msg.author.displayAvatarURL())
    )

}
