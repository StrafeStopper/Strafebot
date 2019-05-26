const Bark = require('../../bot')

exports.run = async (m, a) => {
    if (!a[0]) return m.channel.send('Provide a status!')
    await Bark.b.user.setStatus(a[0])
    m.channel.send(`Done! Set status to: ${a[0]}`)
    m.delete()
}

exports.data = {
    'names': ['status'],
    'perms': 'BOT_OWNER',
    'help': {
        'category': '',
        'text': '',
        'usage': ''
    }
}
