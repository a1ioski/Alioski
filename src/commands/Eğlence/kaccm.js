const {  ButtonStyle, ButtonBuilder, ActionRowBuilder, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ChannelType } = require("discord.js");
const client = require("../../app");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kaçcm")
        .setDescription("Kaş cm?")
        .addUserOption((option) =>
            option.setName("kullanıcı")
                .setDescription("Lütfen bir kullanıcı adı belirtin")
                .setRequired(false)        
        ),
       
        


        async execute(interaction) {

            const { options, member } = interaction

    
            const target = interaction.guild ? interaction.options.getMember("kullanıcı-2") || interaction.member : interaction.options.getUser("kullanıcı-2") || interaction.user 
            const shipper = interaction.guild ? interaction.options.getMember("kullanıcı") || interaction.member : interaction.options.getUser("kullanıcı")
            const Random = Math.floor(Math.random() *50)

        
            const embed = new EmbedBuilder()
            .addFields(
                { name: `${shipper.displayName} seninki`, value: `${Random}cm 🍆`, inline: true },
                )




            interaction.reply({ embeds: [embed]})


        



        
        
        
        
        
        
        
        }

}
