const {  ModalBuilder, EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, TextInputBuilder } = require("discord.js");
const { createTranscript } = require("discord-html-transcripts");

module.exports = { 
    name: "interactionCreate",

    async execute(interaction) {
        const { guild, member, customId, channel, collector } = interaction;
        const { ManageChannels, SendMessages } = PermissionFlagsBits;

        if (!interaction.isButton()) return;

        if (!["infos"].includes(customId)) return;


            switch (customId) {
                case "infos":
                  const infomodal = new ModalBuilder()
                  .setCustomId("infosmodal")
                  .setTitle("Lütfen bilgilerinizi girin...")
                  .setComponents(
                      
                    new ActionRowBuilder()
                    .setComponents(
                        new TextInputBuilder()
                            .setCustomId("name")
                            .setLabel("İsminiz")
                            .setMinLength(5)
                            .setMaxLength(100)
                            .setPlaceholder("Örn. Ali, Sürmen...")
                            .setRequired(true)
                            .setStyle("Short")
                    ),
                    new ActionRowBuilder()
                    .setComponents(
                        new TextInputBuilder()
                            .setCustomId("nickname")
                            .setLabel("Takma adınız")
                            .setMinLength(5)
                            .setMaxLength(100)
                            .setPlaceholder("Örn. Alioski, Dark_Green...")
                            .setRequired(true)
                            .setStyle("Short")
                    ),
                    new ActionRowBuilder()
                    .setComponents(
                        new TextInputBuilder()
                            .setCustomId("birthday")
                            .setLabel("Doğum tarihinizi girin")
                            .setMinLength(5)
                            .setMaxLength(100)
                            .setPlaceholder("Örn. 12 Nisan 2004...")
                            .setRequired(true)
                            .setStyle("Short")
                    
                    ),
                    new ActionRowBuilder()
                    .setComponents(
                        new TextInputBuilder()
                            .setCustomId("animal")
                            .setLabel("Sevdiğiniz hayvan")
                            .setMinLength(5)
                            .setMaxLength(100)
                            .setPlaceholder("Örn. Kedi, Köpek...")
                            .setRequired(true)
                            .setStyle("Short")
                    
                    ),
                    new ActionRowBuilder()
                    .setComponents(
                        new TextInputBuilder()
                            .setCustomId("games")
                            .setLabel("Sevdiğiniz oyunlar")
                            .setMinLength(5)
                            .setMaxLength(100)
                            .setPlaceholder("Örn. Minecraft, Roblox...")
                            .setRequired(true)
                            .setStyle("Short")
                    
                    ),
                  
                  )
                 
                  
      
              interaction.showModal(infomodal)

                   
        
            

               

            }
        }
    }
    