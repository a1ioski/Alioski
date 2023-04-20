const {ButtonBuilder,  ModalBuilder, EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, TextInputBuilder, Embed } = require("discord.js");
const { createTranscript } = require("discord-html-transcripts");
const client = require("../../app");
const { defaultrole, gelengiden} = require("../../config")


client.on("guildMemberRemove", (member) => {
    const channel = member.guild.channels.cache.get(gelengiden)
    const icon = member.displayAvatarURL()
    const embed = new EmbedBuilder()
    .setAuthor({name: `${member.user.tag}`, iconURL: icon})
    .setThumbnail(icon)
    .addFields({ name: `${member.displayName} aramızdan ayrıldı`, value: `Artık sensiz sayımız : ${member.guild.memberCount}`, inline: false })
    .addFields({ name: `Kullanıcı ismi`, value: `${member}`, inline: false })
        .addFields({ name: `Sunucuya ne zaman katıldı`, value: `<t:${parseInt(member.joinedAt / 1000)}:R>`, inline: true })
    .setFooter({text: `Kullanıcı ID: ${member.user.id}`})
        channel.send({embeds: [embed]})


        

})  



