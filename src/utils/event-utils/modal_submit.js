const suggestion = require ("../modals/suggestion.js")

module.exports = interaction => {

    if (interaction.customId == "suggestion") suggestion(interaction)

}