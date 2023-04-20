const {
    ComponentType,
    EmbedBuilder,
    SlashCommandBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("yardım")
        .setDescription("Bu komutla sunucunun tüm komutlarını görün."),
    async execute(interaction) {

        const { client } = interaction;

        const emojis = {
            uygulama: "✉",
            botshop: "🛒",
            eğlence: "<:fun:1096229801917939822>",
            giveaways: "🎉",
            genel: "<:member:1095124700931305594>",
            admin: "<:admin:1096229418818621472>",
            bot: "<:bot:1095124728613703852>",
            music: "🎶",
            roles: "📝",
            services: "⚙",
            suggest: "❓",
            ticket: "🎫",
            videos: "🎥",
        };

        function getCommand(name) {
            const getCommandID = client.application.commands.cache
                .filter((cmd) => cmd.name === name) // Filter by command name
                .map((cmd) => cmd.id); // Map to just the ID property

            return getCommandID;
        }

        const directories = [...new Set(client.commands.map((cmd) => cmd.folder)),];

        const formatString = (str) =>
            `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

        const categories = directories.map((dir) => {
            const getCommands = client.commands
                .filter((cmd) => cmd.folder === dir)
                .map((cmd) => {
                    return {
                        name: cmd.data.name,
                        description:
                            cmd.data.description ||
                            "Bu komut için açıklama yok.",
                    };
                });

            return {
                directory: formatString(dir),
                commands: getCommands,
            };
        });

        const embed = new EmbedBuilder()
            .setDescription("Aşağıdan bir kategori seçerek komut listelerini görün!")
            .setColor("White")
            .setImage("https://media.discordapp.net/attachments/1097764716891361378/1098127235115917363/Screenshot_18.png")
            .setAuthor({ name: `${client.user.username} Komutları`, iconURL: client.user.avatarURL() });

        const components = (state) => [
            new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId("help-menu")
                    .setPlaceholder("Kategori bul")
                    .setDisabled(state)
                    .addOptions(
                        categories.map((cmd) => {
                            return {
                                label: cmd.directory,
                                value: cmd.directory.toLowerCase(),
                                description: `${cmd.directory} kategorisindeki komutlar.`,
                                emoji: emojis[cmd.directory.toLowerCase() || null],
                            };
                        })
                    )
            ),
        ];

        const initialMessage = await interaction.reply({
            embeds: [embed],
            components: components(false),
        });

        const filter = (interaction) =>
            interaction.user.id === interaction.member.id;

        const collector = interaction.channel.createMessageComponentCollector({
            filter,
            componentType: ComponentType.StringSelect,
        });

        collector.on("collect", (interaction) => {
            const [directory] = interaction.values;
            const category = categories.find(
                (x) => x.directory.toLowerCase() === directory
            );

            const categoryEmbed = new EmbedBuilder()
                .setTitle(`${emojis[directory.toLowerCase() || null]}  ${formatString(directory)} komutları`)
                .setDescription(
                    `${formatString(directory)} dosyası altında kategorize edilen tüm komutların listesi.`
                )
                .setColor("White")
                .addFields(
                    category.commands.map((cmd) => {
                        return {
                            name: `</${cmd.name}:${getCommand(cmd.name)}>`,
                            value: `\`${cmd.description}\``,
                            inline: true,
                        };
                    })
                );

            interaction.update({ embeds: [categoryEmbed] });
        });

        collector.on("end", () => {
            initialMessage.edit({ components: components(true) });
        });
    },
};