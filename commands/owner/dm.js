const Bark = require('../../bot')

exports.run = async (m, a) => {
    if (!a[1]) return m.channel.send('Provide a message!')
    const member = m.mentions.members.first() || Bark.b.users.get(a[0])
    if (!member) return m.channel.send('Mention a member!')
    try { await member.send(a.slice(1).join(' ')) }
    catch { return m.channel.send(`Couldn't send the message to ${member.displayName || a[0]}`) }
    m.channel.send(`DMed ${member.displayName || member.id}`)
    m.delete()
}

exports.data = {
    'names': ['dm', 'senddm'],
    'perms': 'BOT_OWNER',
    'help': {
        'category': '',
        'text': '',
        'usage': ''
    }
}
