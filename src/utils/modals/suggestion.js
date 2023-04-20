const { EmbedBuilder} = require("discord.js");
 
module.exports = async (interaction) => {

    const title = interaction.components[0].components[0].value
    const details = interaction.components[1].components[0].value

    const userEmbed = new EmbedBuilder()
        .setTitle(`Öneriniz İçin Teşekkürler!`)
        .setDescription("Öneriniz başarıyla yöneticilere iletildi.")
        .setColor("White")

    interaction.reply({ embeds: [userEmbed], ephemeral: true })

    const logEmbed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(details)
        .setColor("White")
        .setFooter({ text: `${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })

    const message = await interaction.client.channels.cache.get("1095440809769308230").send({ embeds: [logEmbed], fetchReply: true})
    message.react('<a:yes:1095129253730848808>')
    message.react('<a:dont:1095129257514106973>')
    
}