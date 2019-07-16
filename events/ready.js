const Discord = require('discord.js')
module.exports = (bot, msg, args) => {
  console.log(bot.ls.success,"Connected as " + bot.user.username)
  bot.updatePresence()
}
