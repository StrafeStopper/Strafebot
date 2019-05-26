const Bark = require('../../bot')
const music = require('./play.js')

exports.run = async (m, a) => {
    const dispatcher = music.dispatcher[m.guild.id]
    if (dispatcher) dispatcher.np()
}

exports.data = {
    'names': ['nowplaying', 'np', 'playing'],
    'perms': '',
    'help': {
        'category': 'music',
        'text': 'See what\'s playing now',
        'usage': ''
    }
}
