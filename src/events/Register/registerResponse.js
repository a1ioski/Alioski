const {  ModalBuilder, EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, TextInputBuilder } = require("discord.js");
const { createTranscript } = require("discord-html-transcripts");

module.exports = { 
    name: "interactionCreate",

    async execute(interaction) {
        const { guild, member, customId, channel, collector } = interaction;
        const { ManageChannels, SendMessages } = PermissionFlagsBits;

        if (!interaction.isButton()) return;

        if (!["register"].includes(customId)) return;


            switch (customId) {
                case "register":
                  const infomodal = new ModalBuilder()
                  .setCustomId("registermodal")
                  .setTitle("Lütfen bilgilerinizi girin...")
                  .setComponents(
                      
                    new ActionRowBuilder()
                    .setComponents(
                        new TextInputBuilder()
                            .setCustomId("name")
                            .setLabel("İsminiz ve ya takma adınız")
                            .setMinLength(5)
                            .setMaxLength(100)
                            .setPlaceholder("Örn. Ali, Ahmet...")
                            .setRequired(true)
                            .setStyle("Short")
                    ),
                    new ActionRowBuilder()
                    .setComponents(
                        new TextInputBuilder()
                            .setCustomId("years")
                            .setLabel("Yaşınız")
                            .setMinLength(5)
                            .setMaxLength(100)
                            .setPlaceholder("Yaşınızı girdikten sonra 3 kere boşluk tuşuna basın")
                            .setRequired(false)
                            .setStyle("Short")
                    ),
                    
                  
                  )
                 
                  
      
              interaction.showModal(infomodal)

                   
        
            

               

            }
        }
    }
    