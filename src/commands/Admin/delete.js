const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ChannelType } = require("discord.js");
const { t } =  require("i18next")
const client = require("../../app");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kanal-sil")
        .setDescription("Kanalı siler.")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
        
            async execute(interaction) {     
        
        const { guild, options, channel} = interaction


        channel.delete();



        const response = new EmbedBuilder()
            .setColor("White")
            .setDescription("Kanal başarıyla silindi.")


        interaction.reply({ embeds: [response], ephemeral: true})
    }

}
