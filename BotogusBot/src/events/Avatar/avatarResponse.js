const {  ActionRowBuilder, EmbedBuilder, PermissionFlagsBits, ButtonBuilder, ButtonStyle,StringSelectMenuBuilder } = require("discord.js");
const { createTranscript } = require("discord-html-transcripts");

module.exports = { 
    name: "interactionCreate",

    async execute(interaction) {
        const { guild, member, customId, channel, collector } = interaction;
        const { ManageChannels, SendMessages } = PermissionFlagsBits;

        if (!interaction.isButton()) return;

        if (!["genelavatar", "avatar","delete"].includes(customId)) return;
        const menu = new ActionRowBuilder()
        .setComponents(
            new StringSelectMenuBuilder()
            .setCustomId("menu")
            .setPlaceholder("Menüyü görmek için tıkla.")
            .setOptions(
                {
                    label: "Avatar",
                    value: "avatar_value",
                    emoji: "🖼️"

                },
                {
                    label: ` Bilgi`,
                    value: "bilgi_value",
                    emoji: "<:info:1097374013178793994>"

                },
            )
        )


            switch (customId) {
                case "genelavatar":
                  
                  const { options, member } = interaction

                  const link = (interaction.user.avatarURL())
          
          
                  const responseEmbed = new EmbedBuilder()
                      .setAuthor({name: `${member.displayName}`, iconURL: link})
                      .setDescription(`**[[Genel Avatar Link](${link})]**`)
                      .setColor("White")
                      .setImage(interaction.user.displayAvatarURL() + "?size=4096")
                      
          
                  const row = new ActionRowBuilder()
                      .setComponents(
                          new ButtonBuilder()
                              .setCustomId("avatar")
                              .setEmoji("🖼️")
                              .setLabel("Sunucuya Özel Avatar")
                              .setStyle(ButtonStyle.Secondary),
                           new ButtonBuilder()
                              .setCustomId("delete")
                              .setEmoji("<:trash:1097081723700903957>")
                              .setLabel("Sil")
                              .setStyle(ButtonStyle.Secondary)    
                          
                      )
          
                  interaction.update({ embeds: [responseEmbed], components: [menu, row]})
                    break;

                case "avatar":
                  let target = interaction.guild ? interaction.member : interaction.options.get(interaction.user) || interaction.user


                  const alink = (interaction.user.displayAvatarURL())


                  

          
          
                  const avatarEmbed = new EmbedBuilder()
                      .setAuthor({name: `${target.displayName}`, iconURL: alink})
                      .setDescription(`**[[Avatar Link](${alink})]**`)
                      .setColor("White")
                      .setImage(target.displayAvatarURL() + "?size=4096")
          
                  const avatarrow = new ActionRowBuilder()
                      .setComponents(
                          new ButtonBuilder()
                              .setCustomId("genelavatar")
                              .setEmoji("🖼️")
                              .setLabel("Genel Avatar")
                              .setStyle(ButtonStyle.Secondary),
                              new ButtonBuilder()
                                 .setCustomId("delete")
                                 .setEmoji("<:trash:1097081723700903957>")
                                 .setLabel("Sil")
                                 .setStyle(ButtonStyle.Secondary)
                          
                      )
          
                  interaction.update({ embeds: [avatarEmbed], components: [menu, avatarrow]})
                      break;
            

                case "delete":
                  interaction.channel.bulkDelete("1")
                   
                    

            }
        }
    }
    