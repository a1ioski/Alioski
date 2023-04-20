const { ActionRowBuilder, Client, EmbedBuilder, SlashCommandBuilder,ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require("discord.js")
const { openTicket, ip } = require("../../config")
const client = require("../../app");



module.exports = {
    data: new SlashCommandBuilder()
    .setName("talep-kurulum")
    .setDescription("Destek mesajı yaratıcısı açar.")
    .addChannelOption((option) =>
        option.setName("kanal").setDescription("Lütfen bir kanal seçin!")
        .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),


    async execute(interaction) {
        
        const { guild, options, member, name} = interaction
        const channel = interaction.options.getChannel("kanal");

        
        const embedChannel = new EmbedBuilder()
        .setTitle(`${guild.name}`)
        .setDescription("Destek talebi açmak için butona tıklayın.")
        
        .setFooter({ text: `${interaction.guild.name} - Destek sistemi`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        const embedReply = new EmbedBuilder()
        .setDescription(`Destek mesajı yaratıcısı ${channel} kanalında açıldı!`)


        const button = new ActionRowBuilder().setComponents(

            new ButtonBuilder().setCustomId("report").setLabel("Şikayet").setStyle(ButtonStyle.Danger).setEmoji("🛑"),
            new ButtonBuilder().setCustomId("others").setLabel("Diğer").setStyle(ButtonStyle.Secondary).setEmoji("🎟️")
        );

        await channel.send({embeds: ([embedChannel]), components: [button] })

        interaction.reply({embeds: [embedReply], ephemeral: true})
    }

    
}
