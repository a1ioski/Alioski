const {ButtonBuilder,  ButtonStyle, EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, StringSelectMenuBuilder, Embed } = require("discord.js");
const { createTranscript } = require("discord-html-transcripts");
const client = require("../../app");
const { boxpvpSuggestion, skypvpSuggestion, ip } = require("../../config")



module.exports = { 
    name: "interactionCreate",

    async execute(interaction) {
        const { guild, member, customId, channel, collector } = interaction;
        const { ManageChannels, SendMessages } = PermissionFlagsBits;

        if (!interaction.isStringSelectMenu()) return;
        const value = interaction.values[0];
        if(interaction.customId === 'menu') {
            switch (value) {
            case "avatar_value":


            
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
                await interaction.update({embeds: [responseEmbed], components: [menu, row]})


                break;
                case "bilgi_value":
                    const user = interaction.user
                    const memberr = await interaction.guild.members.fetch(user.id)

                    const icon = user.displayAvatarURL()
                    const tag = user.tag
            
                    const embed = new EmbedBuilder()
                    .setAuthor({ name: tag, iconURL: icon})
                    .setThumbnail(icon)
                    .addFields({ name: `Kullanıcı ismi`, value: `${user}`, inline: false })
                    .addFields({ name: `Roller`, value: `${memberr.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`, inline: false })
                    .addFields({ name: `Sunucuya katılma tarihi`, value: `${new Date(memberr.joinedTimestamp).toLocaleDateString()}\n~<t:${parseInt(memberr.joinedAt / 1000)}:R>`, inline: true })
                    .addFields({ name: `Discorda katılma tarihi`, value: `${new Date(user.createdTimestamp).toLocaleDateString()}\n~<t:${parseInt(user.createdAt / 1000)}:R>`, inline: true })
                    .setFooter({text: `Kullanıcı ID: ${user.id}`})
                    .setTimestamp()
                    
                    const menu1 = new ActionRowBuilder()
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
            
            
            
                    
            
                    await interaction.update({embeds: [embed], components: [menu1]})
            


            break;
            case "ip_value":
                const {guild } = interaction  

        const response = new EmbedBuilder()
            .setColor("White")
            .setImage("https://media.discordapp.net/attachments/676503691846746211/1081538663499960340/standard.gif")
            .addFields(
                { name: `<a:server:1095132947524370464> Sunucu Ip'si`, value: "play.minimamc.xyz", inline: true },
                { name: `<a:mc:1095131924806246430> Sürüm`, value: "1.16.5+", inline: true },
                )
        const menu3 = new ActionRowBuilder()
                .setComponents(
                    new StringSelectMenuBuilder()
                    .setCustomId("menu")
                    .setPlaceholder("Menüyü görmek için tıkla.")
                    .setOptions(
                        {
                            label: "Site",
                            value: "site_value",
                            emoji: "<a:site:1095139208517132439>"
        
                        },
                        {
                            label: ` Ip`,
                            value: "ip_value",
                            emoji: "<a:server:1095132947524370464>"
        
                        },
                    )
                )


        interaction.update({ embeds: [response] , components: [menu3]})


        break;
        case "site_value":
            const responseEmbed1 = new EmbedBuilder()
        
            .setFooter({text: "Mağazamıza göz atmaya ne dersin ?"})
            .setTitle("\n")
            .setImage("https://media.discordapp.net/attachments/1080195470653132880/1081540311450386492/standard_1.gif")
            .setColor("White")

        const row1 = new ActionRowBuilder()
            .setComponents(
                new ButtonBuilder()
                    .setEmoji('<a:king:1095458596415881257>')
                    .setLabel("Site")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://minimamc.xyz/"),

                new ButtonBuilder()
                    .setEmoji('<a:market:1095138825493291028>')
                    .setLabel("Mağaza")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://minimamc.xyz/magaza/minimamc/1")
                
            )
            const menu4 = new ActionRowBuilder()
            .setComponents(
                new StringSelectMenuBuilder()
                .setCustomId("menu")
                .setPlaceholder("Menüyü görmek için tıkla.")
                .setOptions(
                    {
                        label: "Site",
                        value: "site_value",
                        emoji: "<a:site:1095139208517132439>"
    
                    },
                    {
                        label: ` Ip`,
                        value: "ip_value",
                        emoji: "<a:server:1095132947524370464>"
    
                    },
                )
            )


            interaction.update({ embeds: [responseEmbed1] , components: [menu4, row1]})





                

     }}
 }}
    