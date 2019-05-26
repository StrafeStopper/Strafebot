const Bark = require('../../bot')
const music = require('./play.js')

exports.run = async (m, a) => {
    const dispatcher = music.dispatcher[m.guild.id]
    if (dispatcher) dispatcher.stop()
}

exports.data = {
    'names': ['stop'],
    'perms': '',
    'help': {
        'category': 'music',
        'text': 'Stop a song',
        'usage': ''
    }
}
