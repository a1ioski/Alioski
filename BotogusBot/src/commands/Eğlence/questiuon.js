const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("sor")
        .setDescription("Bana bir soru sor.")
        .addStringOption(option =>
            option.setName("soru")
                .setDescription("Soracağın soruyu gir")
                .setRequired(true)
        ),
    async execute(interaction) {

        let eightball = [
            'Bu kesin.',
            'Kesin öyledir.',
            'Şüphesiz.',
            'Evet kesinlikle.',
            'Buna güvenebilirsin.',
            'Gördüğüm kadarıyla **evet**.',
            'Büyük ihtimalle.',
            'Maalesef **hayır**.',
            'Evet.',
            'İşaretler evete işaret ediyor.',
            'Kafam karıştı tekrar sor.',
            'Lanet olsun bilmiyorum tekrar sor.',
            'Bunu bilmesen daha iyi olur...',
            'Şimdi tahmin edemem.',
            'Konsantre ol ve tekrar sor.',
            'Buna güvenme.',
            'Cevabım **hayır**.',
            'Kaynaklarım hayır diyor.',
            'Bunu cevaplamak çok zor.',
            'Çok şüpheli.',
            'Mümkün değil.',
            'Belki',
            'Cevap senin içinde gizli yeğen',
            'Hayır.',
            'Böyle saçma sorular sormayı bırak tabikide **hayır**',
            '||Hayır||',
            '||Evet||',
            'Çok merakcısın',
            'Maalesef **evet**.',
            'Bu sadece başlangıç',
            'Lanet olsun kusucam.',
            'Domatese sor o daha iyi bilir.',
            'Ben nerden bileyim Google felan mıyım.',
            'Benim malım o.',
            'Bunu yaratıcım daha iyi biliyor değil mi <@785141062720290836>.',
        ];
        const soru = interaction.options.getString("soru")
        let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
        setTimeout(() => {
            interaction.reply({content: `Soru: **${soru}** \n${eightball[index]}`});
        }, 1000);
    }
};