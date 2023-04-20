const { ActivityType } = require('discord.js');
const mongoose = require('mongoose');
const config = require('../../config');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        

        const activities = ["Among Us", "Minecraft", "Goose Goose Duck", "Left 4 Dead 2", "Half-Life", "Counter Strike 1.6", "Assetto Corsa", "Friday Night Funkin"];
        let i = 10;

        setInterval(() => client.user.setPresence({ activities: [{ name: activities[i++ % activities.length], type: ActivityType.Playing }] }), 15000);
        console.log(`${client.user.tag} Botunuz ${client.guilds.cache.size} serverde aktif! `);
    },
};