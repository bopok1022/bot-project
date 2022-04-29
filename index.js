const Discord = require("discord.js")
const Client = new Discord.Client ()

Client.on("ready", () => {
  console.log(`logged in as ${Client.user.tag`)
})

Client.on("message", msg =>{
 if (msg.content === "ping") {    
   msg.reply("pong")
  } 
})

Client.login(process.env.TOKEN)