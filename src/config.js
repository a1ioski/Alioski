
module.exports = {
  
    async execute(interaction) {},
    
//-----------------------------------------TicketSystem---------------------------------------

    "token": "MTA2NTMwNzczNjgwOTY3Njk0MQ.G6lBQe.mLKyxQ5w5mnhz1TGXichCNYiAD9dUdYe8PWtCk",
    "mongodb": "mongodb+srv://Alioski:09128734@alioski.rzxg9ry.mongodb.net/?retryWrites=true&w=majority",
    "everyone": "1097825730278195230",
    "openParent": "1097848318035505244",
    "infochannel": "1097825731523903537",
    "openTicket": "1095235932443115561",
    "defaultrole": "1097918971405148180",
    "helper": "1097863017372319754",
    "bot":"1065307736809676941",
    "ip": "clanogus.aternos.me",
    "gelengiden": "1097837660862689291",
    "EmojiServer": "1097764715956015174",
    "register": "1097918897824473229",




    
//------------------------------------------------GiveAway----------------------------------
    giveawayManager: {
        //Private Message Information.
        //If you set false, the bot will not send private message information to members who join the giveaway, for example.
        privateMessageInformation: true,
        // When a giveaway is created the bot pings everyone (true or false)
        everyoneMention: false,
        // You can choose a custom reaction
        reaction: '🎉'
    },

    // You can leave it as it is here by default.
    // Don't change things in {} brackets like {winners}, ...
    messages: {
        giveaway: '🎉 **Çekiliş**',
        giveawayEnded: '🎉 **Çekiliş bitti**',
        title: 'Hediye: {this.prize}',
        drawing: 'Çekiliş biticek: {timestamp}',
        dropMessage: 'İlk olun ve tepki verin 🎉!',
        inviteToParticipate: 'Çekilişe katılmak için 🎉 ile tepki ver!',
        winMessage: `Tebrikler {winners}!  çekilişi kazandın 🎉!\n\u200bÖdülünü almak için 24 saat içerisinde <#1079103714910027988> açmalısın!`,
        embedFooter: '{this.winnerCount} kişi kazanıcak',
        noWinner: 'Çekiliş iptal edildi, geçerli katılım yok.',
        hostedBy: 'Çekilişi başlatan: {this.hostedBy}',
        winners: 'Kazanan(lar):',
        endedAt: 'Bitti',
        paused: '⚠️ **Bu çekiliş duraklatıldı!**',
        infiniteDurationText: '`ASLA`',
        congrat: 'Kazanan kişi gerekli şartları sağlamadığı için çekiliş tekrardan çekildi ! Tebrikler: {winners} çekilişi kazandın 🎉!\n\u200bÖdülünü almak için 24 saat içerisinde <#1079103714910027988> açmalısın !',
        error: 'Kayıt yenileme iptal edildi, geçerli katılım yok.'
    }
} //linked in the description