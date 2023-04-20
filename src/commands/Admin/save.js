const { ActionRowBuilder, EmbedBuilder, SlashCommandBuilder,ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require("discord.js")
const { execute } = require("./ticket")
const client = require("../../app")
const { defaultrole, helper } = require("../../config")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("kayıt")
    .setDescription("Kişiyi kaydeder.")
    .addUserOption((option) =>
        option.setName("kullanıcı").setDescription("Lütfen bir kullanıcı seçin!")
        .setRequired(true)
    )
    .addStringOption((option) =>
        option.setName("isim").setDescription("Lütfen bir yaş seçin!")
        .setRequired(true)
    )
    .addStringOption((option) =>
        option.setName("yaş").setDescription("Lütfen bir yaş seçin!")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
    


    async execute(interaction){

        const name = interaction.options.getString("isim")
        const old = interaction.options.getString("yaş")
        const user = interaction.options.getUser("kullanıcı")
        const member = interaction.guild.members.cache.get(user.id)
        const otorol = member.guild.roles.cache.get("1097836964289445898")
        member.roles.add(otorol)
        member.roles.remove(defaultrole)






        const helperembed = new EmbedBuilder()
        .setDescription(`Kullanıcı başarıyla ${member} olarak kaydedildi!`)
        
        const channelembed = new EmbedBuilder()
        .setTitle(`${member.displayName} adlı kullanıcı Kaydedildi`)
        .setThumbnail(member.displayAvatarURL())
        .addFields({name: `Kaydı gerçekleştiren`, value: `${interaction.user}`},
                   {name: `Kullanıcıya verilen isim`, value: `${member}`})
        .setFooter({ text: `${interaction.guild.name} - Kayıt sistemi`, iconURL: interaction.guild.iconURL({ dynamic: true }) })

        interaction.channel.send({embeds: [channelembed], ephemeral: true})
         interaction.reply({embeds: [helperembed], ephemeral: true})
         member.setNickname(`${name} | ${old}`);




    }


        




}