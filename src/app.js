const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { Player } = require('discord-player');



const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");
const { EmojiServer } = require("./config.js");

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});

client.on("unhandledRejection", (reason, p) => {
  const ChannelID = "1061924092346904657";
  console.error("Unhandled promise rejection:", reason, p);
  const Embed = new EmbedBuilder()
    .setColor("#235ee7")
    .setTimestamp()
    .setFooter({ text: "Crash Prevention" })
    .setTitle("Error Encountered");
  const Channel = client.channels.cache.get(ChannelID);
  if (!Channel) return;
  Channel.send({
    embeds: [
      Embed.setDescription(
        "**Unhandled Rejection/Catch:\n\n** ```" + reason + "```"
      ),
    ],
  });
});

client.config = require("./config.js");
client.giveawayConfig = require("./config.js");
client.commands = new Collection();



module.exports = client;

client.login(client.config.token).then(() => {
  loadEvents(client);
  loadCommands(client);
});

//-------------------------------------Emoji ve Embed-------------------------------------\\
client.commands = new Collection()
client.emoji = (emojiName) => client.guilds.cache.get(EmojiServer).emojis.cache.find(e => e.name == emojiName) || "❗"

//-------------------------------------Ticket kısmı-------------------------------------\\

//ben yapicam krds

  client.on("messageCreate", async(message) => {
if(message.author.bot |- !message.guild) return;
let args = message.content.toLowerCase().split(" ")
let command = args.shift()
if (command == "babaninki") {
  message.reply("dastanali ari")
}
})
  client.on('messageCreate', message => {
    if (message.content.toLowerCase() === 'tmm') {
      message.react('👍')
    }
    if (message.content.toLowerCase() === 'bb') {
      message.react('👋')
    }
    if (message.content.toLowerCase() === 'sizce haklı mı?') {
      message.react('✅')
    }
    if (message.content.toLowerCase() === 'sizce haklı mı?') {
      message.react('⛔')
    }
  });
 
  client.on('messageCreate', message => {
    if (message.content.toLowerCase() === 'sa') {
      message.channel.send('Aleyküm Selam.');
    }
    if (message.content.toLowerCase() === 'gunaydin') {
      message.reply('Sanada günaydın.');
    }
    if (message.content.toLowerCase() === 'günaydin') {
      message.reply('Sanada günaydın.');
    }
    if (message.content.toLowerCase() === 'günaydın') {
      message.reply('Sanada günaydın.');
    }
    if (message.content.toLowerCase() === 's a') {
      message.channel.send('Aleyküm Selam.');
    }
    if (message.content.toLowerCase() === 'selam') {
      message.channel.send('Aleyküm Selam.');
    }
    if (message.content.toLowerCase() === 'selamun aleykum') {
      message.channel.send('Aleyküm Selam.');
    }
    if (message.content.toLowerCase() === 'nabersiniz') {
      message.channel.send('İyiyiz sen?');
    }
    if (message.content.toLowerCase() === 'nabersiniz?') {
      message.channel.send('İyiyiz sen?');
    }
    if (message.content.toLowerCase() === 'kes') {
      message.reply('Konuşma bence.');
    }
    if (message.content.toLowerCase() === 'kess') {
      message.reply('Sen kes.');
        }
      
      });
      
