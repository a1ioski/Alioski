const { EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
        data: new SlashCommandBuilder()
        .setName("söylet")
        .setDescription("Yazdığın şeyi söyler")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
        .addStringOption((option) =>
            option.setName("ne-söyleyeyim")
                .setDescription("Söyleyeceğim şeyi yaz")
                .setRequired(true)
        ),
        async execute(interaction) {   

      
    const content = interaction.options.getString("ne-söyleyeyim")
    
    const embed = new EmbedBuilder()
    .setTitle(content)

    await interaction.reply({ ephemeral: true, embeds: [new EmbedBuilder().setTitle("Söyledim!")] });
    interaction.channel.send({ content: content });
    }
}