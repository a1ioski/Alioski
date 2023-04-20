const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
    "https://media.tenor.com/yvLye1kWOKEAAAAM/kiss.gif",
    "https://media.tenor.com/QjMZ6Dx33_QAAAAM/kuss-kussi.gif",
    "https://media.tenor.com/z-eg2uhf-b0AAAAM/peach-cat-kiss.gif",
    "https://media.tenor.com/56-ZhUgb0vsAAAAM/mondaekiss-mondae.gif",
    "https://media.tenor.com/xYIcM0QmdfsAAAAM/kiss-lip.gif",
    "https://media.tenor.com/4Xfw8ADVYp4AAAAM/kiss-couple.gif",
    "https://media.tenor.com/jM6V4TGNVZEAAAAM/superman-tas-dcau.gif",
    "https://media.tenor.com/9GZ7OwwaEVAAAAAM/tkthao219-capoo.gif"
];
module.exports = {
    data: new SlashCommandBuilder()
        .setName("kiss")
        .setDescription("Birini öp")
        .addUserOption(option =>
            option.setName("kimi")
                .setDescription("Kimi öpmek istiyorsun?")
                .setRequired(true)
        ),
    async execute(interaction) {
        const { options, member } = interaction

        const user = options.getUser("kimi");

        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("White")
                    .setImage(slaps[Math.floor(Math.random() * slaps.length)])
                    .setDescription(
                        `${member} ${user}'i öptü!`
                    )
            ]
        });
    }
}