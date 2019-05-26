const Bark = require('../../bot')

exports.run = async (m, a) => {
    const generated = Math.floor(Math.random() * 16777215).toString(16).slice(-6)

    const embed = Bark.embed(generated)
        .setDescription(`#${generated}`)

    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['randomcolor', 'color'],
    'perms': '',
    'help': {
        'category': 'misc',
        'text': 'Generate a random color',
        'usage': ''
    }
}
