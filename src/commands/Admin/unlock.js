const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    EmbedBuilder,
    PermissionsBitField
  } = require("discord.js");
  
  module.exports = {

    data: new SlashCommandBuilder()
      .setName("kanal-kilidi-aç")
      .setDescription("Kilitli kanalı açar.")
      .addChannelOption((option) =>
        option.setName("kanal").setDescription("Lütfen bir kanal seçin!")
        .setRequired(true)
      )
      .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
  
    async execute(interaction, client) {

      const channel = interaction.options.getChannel("kanal");

      

  
      const succesEmbed = new EmbedBuilder()
        .setColor(0xd98832)
        .setTitle(":lock: Kilidi açıldı!")
        .setDescription(`${channel} başarıyla kilidi açıldı.`);
  
      await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
        SendMessages: true,
        AttachFiles: true,
      });
  
      await channel.permissionOverwrites.edit(
        "1097836700157366314",
        {
          SendMessages: true,
          AttachFiles: true,
        }
      );
  
      await interaction.reply({
        embeds: [succesEmbed],
      });
    },
  };