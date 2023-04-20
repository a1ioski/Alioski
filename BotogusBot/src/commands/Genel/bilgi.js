const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder } = require("discord.js");
const { execute } = require("./avatar");
const { EmbedBuilder } = require("@discordjs/builders");


module.exports = {
    data: new SlashCommandBuilder()
    .setName("bilgi")
    .setDescription("Bilgileri gönderir")
    .addUserOption(option => option
        .setName("kullanıcı")
        .setDescription("Lütfen bir kullanıcı girin.")
        .setRequired(false)),

    async execute(interaction) {
        const user = interaction.options.getUser("kullanıcı") || interaction.user
        const member = await interaction.guild.members.fetch(user.id)
        const icon = user.displayAvatarURL()
        const tag = user.tag

        const embed = new EmbedBuilder()
        .setAuthor({ name: tag, iconURL: icon})
        .setThumbnail(icon)
        .addFields({ name: `Kullanıcı ismi`, value: `${user}`, inline: false })
        .addFields({ name: `Roller`, value: `${member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`, inline: false })
        .addFields({ name: `Sunucuya katılma tarihi`, value: `${new Date(member.joinedTimestamp).toLocaleDateString()}\n~<t:${parseInt(member.joinedAt / 1000)}:R>`, inline: true })
        .addFields({ name: `Discorda katılma tarihi`, value: `${new Date(user.createdTimestamp).toLocaleDateString()}\n~<t:${parseInt(user.createdAt / 1000)}:R>`, inline: true })
        .setFooter({text: `Kullanıcı ID: ${user.id}`})
        .setTimestamp()



        const row = new ActionRowBuilder()
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

        await interaction.reply({embeds: [embed], components: [row]})

        






    }


}