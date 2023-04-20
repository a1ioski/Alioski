const {  ButtonStyle, ButtonBuilder, ActionRowBuilder, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, StringSelectMenuBuilder } = require("discord.js");
const { t } =  require("i18next")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Belirtilen kullanıcının avatarını gönderir.")
        .addUserOption((option) =>
            option.setName("kullanıcı")
                .setDescription("Lütfen bir kullanıcı adı belirtin")
                .setRequired(false)
        ),
                
        
    async execute(interaction) {

        const { options, member } = interaction

        let target = interaction.guild ? interaction.options.getMember("kullanıcı") || interaction.member : interaction.options.getUser("kullanıcı") || interaction.user
        const link = (target.displayAvatarURL())


        const responseEmbed = new EmbedBuilder()
            .setAuthor({name: `${target.displayName}`, iconURL: link})
            .setDescription(`**[[Avatar Link](${link})]**`)
            .setColor("White")
            .setImage(link + "?size=4096")
            

        const row = new ActionRowBuilder()
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

        interaction.reply({ embeds: [responseEmbed], components: [menu, row]})

    
    }

}

