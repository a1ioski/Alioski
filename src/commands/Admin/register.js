const { ActionRowBuilder, Client, EmbedBuilder, SlashCommandBuilder,ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require("discord.js")
const { openSuggestion, ip } = require("../../config")
const client = require("../../app");



module.exports = {
    data: new SlashCommandBuilder()
    .setName("kayıt-kurulum")
    .setDescription("Kayıt mesajı yaratıcısı açar.")
    .addChannelOption((option) =>
        option.setName("kanal").setDescription("Lütfen bir kanal seçin!")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),


    async execute(interaction) {
        
        const { guild, options, member, name} = interaction
        const channel = interaction.options.getChannel("kanal");

        
        const embedChannel = new EmbedBuilder()
        .setTitle(`${guild.name}`)
        .setDescription("<:pen:1098285828909826068> Butona tıklayarak kaydınızı gerçekleştirin\nEğer kaydınızı yaperken hata alırsanız lütfen tekrar deneyin")
        .setThumbnail("https://media.discordapp.net/attachments/1097764716891361378/1098284701057306654/pngwing.com.png?width=482&height=498")
        .setFooter({ text: `${interaction.guild.name} - Kayıt sistemi`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        const embedReply = new EmbedBuilder()
        .setDescription(`Sistem başarıyla ${channel} kanalında kuruldu !`)


        const button = new ActionRowBuilder().setComponents(

            new ButtonBuilder().setCustomId("register").setLabel("Kayıt ol").setStyle(ButtonStyle.Secondary).setEmoji("<:username:1097847474955223051>"),
        );

        await channel.send({embeds: ([embedChannel]), components: [button] })

        interaction.reply({embeds: [embedReply], ephemeral: true})
        
    }
    

    
}
