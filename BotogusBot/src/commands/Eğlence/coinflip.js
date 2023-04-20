const {  ButtonStyle, ButtonBuilder, ActionRowBuilder, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ChannelType } = require("discord.js");
const client = require("../../app");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("yazıtura")
        .setDescription("Yazı tura oyna!"),
        
       
        


        async execute(interaction) {

            let coin = [ 'Yazı', 'Tura' ]

            

            let index = (Math.floor(Math.random() * Math.floor(coin.length)));


            interaction.reply('<a:coinflip:1098218304331579411> Para dönüyor...').then(msg => {
                setTimeout(() => {
                    msg.edit(`<:coin:1098218696180240474> ${coin[index]}  `)
                }, 5000)  })
            



            








        



        
        
        
        
        
        
        
        }

}
