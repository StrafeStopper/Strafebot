const Bark = require('../../bot')

exports.run = async (m, a) => {
    const embed = Bark.embed()
    .setDescription(`Pong! :ping_pong: ${Math.floor(Bark.b.ping)} ms!`)
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['ping'],
    'perms': '',
    'help': {
        'category': 'misc',
        'text': 'Check the bot\'s ping',
        'usage': ''
    }
}
