const Bark = require('../../bot')
const music = require('./play.js')

exports.run = async (m, a) => {
    const dispatcher = music.dispatcher[m.guild.id]
    if (dispatcher) dispatcher.resume()
}

exports.data = {
    'names': ['unpause', 'resume'],
    'perms': '',
    'help': {
        'category': 'music',
        'text': 'Resume a paused song',
        'usage': ''
    }
}
