const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
  
});

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
        
  