const Bark = require('../../bot')
const music = require('./play.js')

exports.run = async (m, a) => {
    const dispatcher = music.dispatcher[m.guild.id]
    if (dispatcher) dispatcher.pause()
}

exports.data = {
    'names': ['pause'],
    'perms': '',
    'help': {
        'category': 'music',
        'text': 'Pause a song',
        'usage': ''
    }
}
