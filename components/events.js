const Bark = require('../bot')
const b = Bark.b

exports.run = async () => {
    // Guild join
    b.on('guildCreate', g => {
        // Updates the playing status
        b.user.setActivity(`${Bark.c.prefix}help | in ${b.guilds.size} servers`)
        if (Bark.c.guildBlacklist.includes(g.id)) { // If the guild is blacklisted
            g.leave() // Leaves it
            // And logs that
            console.log(`Left a blacklisted guild! ${g.name} / ${g.id}`)
        }
    })

    // Guild leave
    b.on('guildDelete', () => {
        // Updates the playing status
        b.user.setActivity(`${Bark.c.prefix}help | in ${b.guilds.size} servers`)
    })

    // Error
    b.on('error', () => {
        console.log(`${Bark.c.botName} lost connection!`)
    })
}