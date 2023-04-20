const { SlashCommandBuilder, EmbedBuilder , PermissionFlagsBits} = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
    .setName('sil')
    .setDescription('Mesajları toplu bir şekilde siler.')
    .addNumberOption(opt => opt.setName('sayı').setDescription('Silinecek mesaj sayısı').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

    async execute(interaction, client, user) {
        const numMessages = interaction.options.get('sayı').value;

        if(numMessages > 100) {
            return await interaction.reply('100 Mesajdan fazla mesaj silemezsiniz');
        }

        try { interaction.channel.bulkDelete(numMessages)
        .then(messages => {
         const embed = new EmbedBuilder() 
        .setColor("White")
        .setDescription(` **\`${messages.size}\`** adet mesaj silindi.`)
        interaction.reply({ embeds: [embed], ephemeral: true })
    })}catch (err) { 
    console.log(err);

    const embed = new EmbedBuilder()
    .setColor("Red").setDescription("⛔ | Something went wrong...");

    return interaction.reply({ embeds: [embed], ephemeral: true });}
        }}
