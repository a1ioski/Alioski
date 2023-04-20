const { ButtonStyle, ButtonBuilder, ActionRowBuilder, SlashCommandBuilder, EmbedBuilder, StringSelectMenuBuilder, ChannelType } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("site")
        .setDescription("Sitemizin linkini gönderir."),
    execute(interaction) {

        const responseEmbed = new EmbedBuilder()
        
            .setTitle("Çok yakında...")
            .setImage("https://media.discordapp.net/attachments/1097764716891361378/1098127235115917363/Screenshot_18.png")
            .setColor("#0222be")

        const row = new ActionRowBuilder()
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
            const menu = new ActionRowBuilder()
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


            interaction.reply({ embeds: [responseEmbed]})
        }
}

