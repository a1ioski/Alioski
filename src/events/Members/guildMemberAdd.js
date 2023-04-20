const {ButtonBuilder,  ModalBuilder, EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, TextInputBuilder, Embed } = require("discord.js");
const { createTranscript } = require("discord-html-transcripts");
const client = require("../../app");
const { defaultrole, gelengiden, register} = require("../../config")


client.on("guildMemberAdd", (member, interaction) => {
    let otorol = member.guild.roles.cache.get(defaultrole)
    const channel = member.guild.channels.cache.get(gelengiden)
    const channell = member.guild.channels.cache.get(register)
    const icon = member.displayAvatarURL()
    const embed = new EmbedBuilder()
    .setAuthor({name: `${member.user.tag}`, iconURL: icon})
    .setThumbnail(icon)
    .addFields({ name: `Hoşgeldin ${member.displayName}`, value: `Seninle birlikte sayımız: ${member.guild.memberCount}`, inline: false })
    .addFields({ name: `Kullanıcı ismi`, value: `${member}`, inline: false })
    .addFields({ name: `Discorda katılma tarihi`, value: `${new Date(member.user.createdTimestamp).toLocaleDateString()}`, inline: true })
    .setFooter({text: `Kullanıcı ID: ${member.user.id}`})
    channel.send({embeds: [embed]})
    member.roles.add(otorol.id)

    channell.send(`Hoşgeldin ${member}`).then(msg => {
        setTimeout(() => {
            msg.delete()
        }, 10000)})
        


        

})  



