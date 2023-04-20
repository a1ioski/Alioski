const {PermissionsBitField, permissionOwerwrites, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle, ChannelType, PermissionFlagsBits, resolveColor ,} = require("discord.js");

const { ViewChannel, SendMessages, ReadMessageHistory } = PermissionFlagsBits;
const { createTranscript } = require("discord-html-transcripts");
const cooldown_control = require("../../utils/cooldown_control.js")
const modal_submit = require("../../utils/event-utils/modal_submit.js")
const auto_complete = require("../../utils/event-utils/auto_complete.js")
const config = require("../../config")
const {bot, openParent , everyone } = require("../../config")
const client = require("../../app");
const db = require("mongoose")


module.exports = {
  name: "interactionCreate",

  async execute(interaction) {  

    if (interaction.isButton()) {
        const {type, guild, member, customId, user} = interaction;
        const {ViewChannel, SendMessages, ManageChannels, ReadMessageHistory} = PermissionFlagsBits;
        const TicketID = Math.floor(Math.random() *100)

        if (!interaction.isButton()) return;

        if (interaction.customId == "report") {
          
      
        try {
          await guild.channels.create({
            name:`📩▸${member.user.username}-şikayet  -${TicketID}`,
            type: ChannelType.GuildText,
              parent: openParent,
              permissionOverwrites: [
                {
                  id: everyone,
                  deny: [ViewChannel, ReadMessageHistory],
                },
                {
                  id: interaction.user.id,
                  allow: [ViewChannel, ReadMessageHistory],
                },
                {
                  id: bot,
                  allow: [ViewChannel, ReadMessageHistory, SendMessages],
                },
                {
                  id: config.helper,
                  allow: [ViewChannel, ReadMessageHistory, SendMessages],
                },
                
              ],
          }).then(async (channel) => {
    
            
    
              const Channel = client.channels.cache.get(channel.id);
    
              const embedChannel = new EmbedBuilder()
              .setTitle(`${guild.name} - Clanogus şikayet`)
              .setDescription(`<@&1097863017372319754> kısa zamanda seninle iletişime geçecektir. Lütfen şikayetinizi bildirin.`)
              .setFooter({text: `${member.user.username}`, iconURL: member.displayAvatarURL({dynamic: true}) })
              .setTimestamp();
              const embedReply = new EmbedBuilder()
              .setDescription(`${Channel} açılmıştır!`)
    
    
              const button = new ActionRowBuilder().setComponents(
                new ButtonBuilder().setCustomId("close").setLabel("Kapat").setStyle(ButtonStyle.Danger).setEmoji("<:trash:1097081723700903957>"),
                new ButtonBuilder().setCustomId("lock").setLabel("Kilitle").setStyle(ButtonStyle.Primary).setEmoji("🔒"),
                  new ButtonBuilder().setCustomId("unlock").setLabel("Tekrar aç").setStyle(ButtonStyle.Primary).setEmoji("🔐")
    
              );

              channel.send({embeds: [embedChannel], components: [button]})
              channel.send("<@&1097863017372319754>").then(msg => {
                msg.delete()}),
              interaction.reply({embeds: [embedReply], ephemeral: true})
          })
          
          
    
          }catch (err) {
              return console.log(err)
          }
        }


        
        
        switch (customId) {
         

          
      

          case "others":
            try {
              await guild.channels.create({
                name:`📩▸${member.user.username}-talep-${TicketID}`,
                type: ChannelType.GuildText,
                  parent: openParent,
                  permissionOverwrites: [
                    {
                      id: everyone,
                      deny: [ViewChannel, ReadMessageHistory],
                    },
                    {
                      id: interaction.user.id,
                      allow: [ViewChannel, ReadMessageHistory],
                    },
                    {
                      id: bot,
                      allow: [ViewChannel, ReadMessageHistory, SendMessages],
                    },
                    {
                      id: config.helper,
                      allow: [ViewChannel, ReadMessageHistory, SendMessages],
                    },
                   
                  ],
              }).then(async (channel) => {
        
              
        
                  const Channel = client.channels.cache.get(channel.id);
        
                  const embedChannel = new EmbedBuilder()
                  .setTitle(`${guild.name} - Clanogus talep`)
                  .setDescription(` <@&1097863017372319754> kısa zamanda seninle iletişime geçecektir. Lütfen şikayetinizi bildirin.`)
                  .setFooter({text: `${member.user.username}`, iconURL: member.displayAvatarURL({dynamic: true}) })
                  .setTimestamp();
                  const embedReply = new EmbedBuilder()
                  .setDescription(`${Channel} açılmıştır!`)
        
        
                  const button = new ActionRowBuilder().setComponents(
                    new ButtonBuilder().setCustomId("close").setLabel("Kapat").setStyle(ButtonStyle.Danger).setEmoji("<:trash:1097081723700903957>"),
                    new ButtonBuilder().setCustomId("lock").setLabel("Kilitle").setStyle(ButtonStyle.Primary).setEmoji("🔒"),
                      new ButtonBuilder().setCustomId("unlock").setLabel("Tekrar aç").setStyle(ButtonStyle.Primary).setEmoji("🔐")
        
                  );
                  channel.send("Admin yeni bir talep var!");
                  channel.send({embeds: [embedChannel], components: [button]})
                  channel.send("<@&1097863017372319754>").then(msg => {
                    msg.delete()}),
                  interaction.reply({embeds: [embedReply], ephemeral: true})
              })
              
        
              }catch (err) {
                  return console.log(err)
              }
              

      }

        
        

    }
    const {customId, values, fields, member, user, guild, commandName, channel, guildId, message,} = interaction;

    const errEmbed = new EmbedBuilder().setColor("Red");

    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(commandName);

     

//------------------- Cooldown Control------------------------------------------------------
        const cooldown = cooldown_control(command, interaction.user.id)
        if (cooldown) return interaction.reply({content: `Tekrar komut kullanmak için \`${cooldown}\` saniye bekle`, ephemeral: true})

      command.execute(interaction, client);
    }

  }
}