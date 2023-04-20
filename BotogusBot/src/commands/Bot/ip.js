const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");
const { t } =  require("i18next")
const client = require("../../app");
const { ip } = require("../../config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ip")
        .setDescription("Minecraft sunucusu ip'sini gösterir."),
    async execute(interaction) {   
        const {guild } = interaction  

        const response = new EmbedBuilder()
            .setColor("bb0000")
            .setThumbnail("https://cdn.discordapp.com/attachments/1097764716891361378/1098131263656820787/download.png")
            .setImage("https://media.discordapp.net/attachments/1097764716891361378/1098127235115917363/Screenshot_18.png")
            .addFields(
                { name: `<:link:1097824915253641216> Sunucu Ip'si`, value: `${ip}`, inline: false },
                { name: `<:settings:1097817162573426828> Sürüm`, value: "1.19.4", inline: false },
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


        interaction.reply({ embeds: [response]})
    }
}
