const Bark = require('../bot')
const b = Bark.b

exports.run = async () => {
    b.on('ready', () => {
        console.log(`
########################################
# ${Bark.c.botName} was started!
# Running in ${b.guilds.size} servers with ${b.users.size} users
# With the global prefix: ${Bark.c.prefix}
# Owner: ${b.users.get(Bark.c.owners[0]).tag || 'Unknown'}
########################################
        `) // Sends a cool looking boot message to console
        // Updates the playing status
        b.user.setActivity(`NUTE IS GAY (HONK)`)
        // Sets the online status
        b.user.setStatus(Bark.c.defaultStatus)
    })
}
