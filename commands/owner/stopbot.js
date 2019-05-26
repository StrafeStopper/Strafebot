const Bark = require('../../bot')

exports.run = async (m, a) => {
    await m.channel.send('Stopping the bot...') // Sends a log out message
    await Bark.b.destroy() // Logs out
    console.log('Stopping the bot...') // Logs the event
    process.exit(0) // Stops the program
}

exports.data = {
    'names': ['stopbot', 's', 'kys', 'die'],
    'perms': 'BOT_OWNER',
    'help': {
        'category': '',
        'text': '',
        'usage': ''
    }
}
