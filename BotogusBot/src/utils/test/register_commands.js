export default (client, type = "global") => {

    const commands = client.commands.map(command => command.slash_data)

    if (type == "global") {
        client.application.commands.set(commands)
            .then(() => {
                console.log("Global komutlar kaydedildi")
            })
    }
    else if (type == "guild") {
        const guild = client.guilds.cache.get("785141062720290836")
        guild.commands.set(commands)
            .then(() => {
                console.log("Guild komutları kaydedildi")
            })
    }

}