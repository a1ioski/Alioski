const {  ButtonInteraction, EmbedBuilder, PermissionFlagsBits, Collector } = require("discord.js");
const { createTranscript } = require("discord-html-transcripts");

module.exports = { 
    name: "interactionCreate",

    async execute(interaction) {
        const { guild, member, customId, channel, collector } = interaction;
        const { ManageChannels, SendMessages } = PermissionFlagsBits;

        if (!interaction.isButton()) return;

        if (!["close", "lock", "unlock"].includes(customId)) return;


            switch (customId) {
                case "close":
                    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageChannels)) return interaction.reply({content: "Bunu sen yapamazın!", ephemeral: true})
                    



                    const response = new EmbedBuilder()
                        .setColor("White")
                        .setDescription("Kanal \`10\` saniye içinde silinecek")
            
            
                    interaction.reply({ embeds: [response], ephemeral: true})
                    setTimeout(function () {
                      channel.delete();

                    }, 10000)


                    break;

                case "lock":
                    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageChannels)) return interaction.reply({content: "Bunu sen yapamazın!", ephemeral: true})

                    {       

            
                        const succesEmbed = new EmbedBuilder()
                          .setColor("White")
                          .setTitle(`:lock: ${member.user.username} adlı kullanıcı talebi kilitledi`)
                          .setDescription(`${channel} başarıyla kilitlendi.`)
                          
                    
                        await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
                          SendMessages: false,
                          AttachFiles: false,
                        });
                        
                    
                        interaction.reply({
                          embeds: [succesEmbed],
                        });
                      }

                      break;
            

                case "unlock":
                    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageChannels)) return interaction.reply({content: "Bunu sen yapamazın!", ephemeral: true})

                    {            
            
                        const succesEmbed = new EmbedBuilder()
                          .setColor("White")
                          .setTitle(`:lock: ${member.user.username} adlı kullanıcı talebin kilidini açtı`)
                          .setDescription(`${channel} başarıyla kilidi açıldı.`);
                    
                        await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
                          SendMessages: true,
                          AttachFiles: true,
                        });
                    
                    
                        interaction.reply({
                          embeds: [succesEmbed],
                        });
                      }
                    

            }
        }
    }
    