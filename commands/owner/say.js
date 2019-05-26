const Bark = require('../../bot')

exports.run = async (m, a) => {
    if (!a[0]) return m.channel.send('Provide a message!')
    await m.channel.send(a.join(' '))
    m.delete()
}

exports.data = {
    'names': ['say', 'talk'],
    'perms': 'BOT_OWNER',
    'help': {
        'category': '',
        'text': '',
        'usage': ''
    }
}
