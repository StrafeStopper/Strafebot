const Bark = require('../../bot')
const music = require('./play.js')

exports.run = async (m, a) => {
    const dispatcher = music.dispatcher[m.guild.id]
    if (dispatcher) dispatcher.leave()
}

exports.data = {
    'names': ['leave'],
    'perms': '',
    'help': {
        'category': 'music',
        'text': 'Leave a voice channel',
        'usage': ''
    }
}
