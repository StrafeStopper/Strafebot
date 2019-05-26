const Bark = require('../../bot')
const ds = require('discord.js')

exports.run = async (m, a) => {
    if (!a[0]) return m.channel.send('Provide _something._')
    try { eval(a.join(' ')) }
    catch(e) { console.log(e) }
    m.delete()
}

exports.data = {
    'names': ['ee'],
    'perms': 'BOT_OWNER',
    'help': {
        'category': '',
        'text': '',
        'usage': ''
    }
}
