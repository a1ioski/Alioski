const {ButtonBuilder,  ModalBuilder, EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, TextInputBuilder, Embed } = require("discord.js");
const { createTranscript } = require("discord-html-transcripts");
const client = require("../../app");
const { boxpvpSuggestion, skypvpSuggestion, ip, infochannel } = require("../../config")


module.exports = { 
    name: "interactionCreate",

    async execute(interaction) {
    
                  
              const { guild, member, customId, channel, collector } = interaction;
              const { ManageChannels, SendMessages } = PermissionFlagsBits;
      
              if (!interaction.isModalSubmit()) return;
      
              if (!["infosmodal"].includes(customId)) return;
      
      
                  switch (customId) {
                      case "infosmodal":
                          const InfoChannel = client.channels.cache.get(infochannel);
                          const icon = interaction.member.displayAvatarURL()
                          const name = interaction.fields.getTextInputValue("name")
                          const nickname = interaction.fields.getTextInputValue("nickname")
                          const birthday = interaction.fields.getTextInputValue("birthday")
                          const animal = interaction.fields.getTextInputValue("animal")
                          const games = interaction.fields.getTextInputValue("games")

      
      
      
                          const InfoSuccesEmbed = new EmbedBuilder()
                          .setTitle(`✅ Bilgileriniz başarıyla gönderildi`)
                          .setDescription(`<a:arrow:1097845906377801758> ${InfoChannel}`)
      
      
                          const InfoEmbed = new EmbedBuilder()
                          .setAuthor({name: `${member.user.tag}`, iconURL: icon})
                          .setTitle(`${member.displayName} <a:afrog3:1097832588502110208><a:afrog2:1097832590762836048><a:afrog1:1097832804030615653> `)
                          .setThumbnail(icon)
                          .addFields(
                            { name: `İsim <:username:1097847474955223051>`, value: name, inline: true },
                            { name: `Takma ad <:username:1097847474955223051>`, value: nickname, inline: true },
                            { name: `Doğum tarihi 🎈`, value: birthday, inline: false },
                            { name: `Sevdiği hayvanlar 🐱`, value: animal, inline: false },
                            { name: `Sevdiği oyunlar 🎮`, value: games, inline: false },
                            )
      
                          const skymessage = await guild.channels.cache.get(infochannel).send({embeds: ([InfoEmbed])})
                          interaction.reply({embeds: [InfoSuccesEmbed], ephemeral: true})
      
                      
      
      
                      
      
                     
      
                  }
            

                   
        
            

               

            }
    
        }
    
    