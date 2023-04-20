const {ButtonBuilder,  ModalBuilder, EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, TextInputBuilder, Embed } = require("discord.js");
const { createTranscript } = require("discord-html-transcripts");
const client = require("../../app");
const { boxpvpSuggestion, skypvpSuggestion, ip, infochannel, defaultrole } = require("../../config")


module.exports = { 
    name: "interactionCreate",

    async execute(interaction) {
    
                  
              const { guild, member, customId, channel, collector } = interaction;
              const { ManageChannels, SendMessages } = PermissionFlagsBits;
      
              if (!interaction.isModalSubmit()) return;
      
              if (!["registermodal"].includes(customId)) return;
      
      
                  switch (customId) {
                      case "registermodal":
                        const otorol = member.guild.roles.cache.get("1097836964289445898")
                          const Channel = client.channels.cache.get(infochannel);
                          const icon = interaction.member.displayAvatarURL()
                          const name = interaction.fields.getTextInputValue("name")
                          const old = interaction.fields.getTextInputValue("years")

      
      
      
                          const Register = new EmbedBuilder()
                          .setTitle(`✅ Kaydınız birazdan gerçekleşicektir`)

                            member.setNickname(`${name} | ${old}`);
                            member.roles.remove(defaultrole)
                            interaction.member.roles.add(otorol)
                            

      
                          
      
                          interaction.reply({embeds: [Register], ephemeral: true})
      
                      
      
      
                      
      
                     
      
                  }
            

                   
        
            

               

            }
    
        }
    
    