const {  ButtonStyle, ButtonBuilder, ActionRowBuilder, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ChannelType } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("ship")
        .setDescription("Uyumunu test et")
        .addUserOption((option) =>
            option.setName("kullanıcı")
                .setDescription("Lütfen bir kullanıcı adı belirtin")
                .setRequired(true)        
        )
        .addUserOption((option) =>
            option.setName("diger-kullanıcı")
                .setDescription("Lütfen bir kullanıcı adı belirtin")
                .setRequired(false)        
        ),
        


        async execute(interaction) {

            const { options, member } = interaction

    
            const target = interaction.guild ? interaction.options.getMember("diger-kullanıcı") || interaction.member : interaction.options.getUser("diger-kullanıcı") || interaction.user 
            const shipper = interaction.guild ? interaction.options.getMember("kullanıcı") || interaction.member : interaction.options.getUser("kullanıcı")
            const Random = Math.floor(Math.random() *100)
        
            const embed1 = new EmbedBuilder()
            .setTitle("Hiç mi sevmedin 🥺")
            .addFields(
                { name: `${shipper.displayName} 💔 ${target.displayName} `, value: `%${Random} uyumlusunuz!`, inline: true },
                )
            
                
            const embed2 = new EmbedBuilder()
            .setTitle("Bu kadarcık mı 😑")
            .addFields(
                    { name: `${shipper.displayName} ❤️‍🩹 ${target.displayName} `, value: `%${Random} uyumlusunuz!`, inline: true },
                    )
            const embed3 = new EmbedBuilder()
            .setTitle("Seviomuşsun yalan yok 🙂")
            .addFields(
                    { name: `${shipper.displayName} ❤️ ${target.displayName} `, value: `%${Random} uyumlusunuz!`, inline: true },
                    )
            const embed4 = new EmbedBuilder()
            .setTitle("Oha sen aşıksın 😍")
            .addFields(
                    { name: `${shipper.displayName} 💖 ${target.displayName} `, value: `%${Random} uyumlusunuz!`, inline: true },
                    )
            const embed5 = new EmbedBuilder()
            .setTitle("Bu...bu imkansız 🤯")
            .addFields(
                    { name: `${shipper.displayName} 💝 ${target.displayName} `, value: `%${Random} uyumlusunuz!`, inline: true },
                    )
            
            
            if (Random < 20) {
                return await interaction.reply({embeds: [embed1]})
            }
            if (Random > 80) {
                return await interaction.reply({embeds: [embed4]})
            }
            if (Random > 50) {
                return await interaction.reply({embeds: [embed3]})
            }
            if (Random < 50) {
                return await interaction.reply({embeds: [embed2]})
            }
            if (Random = 50) {
                return await interaction.reply({embeds: [embed5]})
            }
            
            
            







        



        
        
        
        
        
        
        
        }

}
