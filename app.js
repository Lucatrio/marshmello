const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setActivity('to my music', { type: 'LISTENING' })
});
client.login(process.env.BOT_TOKEN)
