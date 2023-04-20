const { ActionRowBuilder, Client, EmbedBuilder, SlashCommandBuilder,ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require("discord.js")
const { openSuggestion, ip } = require("../../config")
const client = require("../../app");



module.exports = {
    data: new SlashCommandBuilder()
    .setName("hakkımda-kurulum")
    .setDescription("Öneri mesajı yaratıcısı açar.")
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
        .setDescription("Hakkınızda bilgileri girmek için \nlütfen butona tıklayın")
        .setThumbnail(interaction.guild.iconURL({dynamic: true}))
        .addFields({name: "<:frog2:1097832638041051167><:frog3:1097832640721191012><:frog1:1097832585238949898>", value: "\n"})
        .setFooter({ text: `${interaction.guild.name} - Hakkımda sistemi`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        const embedReply = new EmbedBuilder()
        .setDescription(`Sistem başarıyla ${channel} kanalında kuruldu !`)


        const button = new ActionRowBuilder().setComponents(

            new ButtonBuilder().setCustomId("infos").setLabel("Hakkımda").setStyle(ButtonStyle.Secondary).setEmoji("<:username:1097847474955223051>"),
        );

        await channel.send({embeds: ([embedChannel]), components: [button] })

        interaction.reply({embeds: [embedReply], ephemeral: true})
        
    }
    

    
}
