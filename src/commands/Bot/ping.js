const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ChannelType} = require("discord.js");
const client = require("../../app");
module.exports = {

    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Pinginizi ölçer."),
    async execute(interaction) {
        const { emoji, ws } = interaction.client

        const discord_ping = ws.ping
        const bot_ping = Math.abs(Date.now() - interaction.createdTimestamp)



        const response = new EmbedBuilder()
            .setColor("#00ad00")
            .setTitle("pong! 🏓")
            .addFields(
                { name: `<:members:1097817134614200330> Discord : ${discord_ping} ms`, value: `\n`, inline: false },
                { name: `<:bot:1097817140133904436> Bot : ${bot_ping} ms`, value: `\n`, inline: false },

            )

        interaction.reply({ embeds: [response] })
    }
}

