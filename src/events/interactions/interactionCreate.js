const cooldown_control = require("../../utils/cooldown_control")
const auto_complete = require("../../utils/event-utils/auto_complete.js")
const modal_submit = require("../../utils/event-utils/modal_submit.js")
const { t } = require("i18next")

module.exports =  client => {

    const { embed } = client

    client.on("interactionCreate", interaction => {
        if (interaction.isAutocomplete()) auto_complete(interaction)
        else if (interaction.isModalSubmit()) modal_submit(interaction)

        const command = client.commands.get(interaction.commandName)
        if (!command) return


        if (command.data.permission && !interaction.member.permissions.has(command.data.permission)) return interaction.reply({
            embeds: [
                embed(`Bu komutu kullanmak için \`${command.data.permission}\` yetkisi gerekiyor!`)
            ]
            
        })})}