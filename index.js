const keep_alive = require('./event/keep_alive.js')
const Discord = require(`discord.js`);
const { Intents, Message, Collection, bot } = require("discord.js");
const client = new Discord.Client({
	intents: [Intents.FLAGS.GUILDS]
});
const { token } = require('./config.json')
const { codeBlock } = require("@discordjs/builders");
async function clean(client, text) {
	if (text && text.constructor.name == "Promise")
		text = await text;
	if (typeof text !== "string")
		text = require("util").inspect(text, { depth: 1 });

	text = text
		.replace(/`/g, "`" + String.fromCharCode(8203))
		.replace(/@/g, "@" + String.fromCharCode(8203));

	text = text.replaceAll(client.token, "[REDACTED]");

	return text;
};

client.on("ready", () => {
	console.log(`logged in as ${client.user.tag}!`)
});

if (Message.content === "hello there") {
	Message.reply("GENERAL KENOBI")
} else if (Message.content === "hi") {
	console.log("someone is using hi")
  Message.reply("hello")
} else if (Message.content === "hello") {
	Message.reply("hello")
} else {
	console.log('bug')
}


client.login(token);