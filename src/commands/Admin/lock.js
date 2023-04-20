const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    EmbedBuilder,
    PermissionsBitField
  } = require("discord.js");
  
  module.exports = {

    data: new SlashCommandBuilder()
      .setName("kanal-kilitle")
      .setDescription("Kanalı kilitler.")
      .addChannelOption((option) =>
        option.setName("kanal").setDescription("Lütfen bir kanal seçin!")
        .setRequired(true)
      )
      .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),
  
    async execute(interaction, client) {

      const channel = interaction.options.getChannel("kanal");

      

  
      const succesEmbed = new EmbedBuilder()
        .setColor(0xd98832)
        .setTitle(":lock: Kilitlendi!")
        .setDescription(`${channel} başarıyla kilitlendi.`);
  
      await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
        SendMessages: false,
        AttachFiles: false,
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