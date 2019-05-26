const Bark = require('../../bot')
const d = Bark.d

exports.run = async (m, a) => {
  m.channel.send('disabled')
    /*const name = m.guild.id + '|leave'

    if (!a[0]) return d.del(name, () => {
        m.channel.send('Turned off goodbye messages!')
    })

    if (a[0] && !a[1]) return m.channel.send('Provide a channel and a message! `%s` = server / `%n` = username')
    if (!a[0].includes('<#')) return m.channel.send('Provide a channel and a message! `%s` = server / `%n` = username')
    if (a.join(' ').includes('|')) return m.channel.send('You can\'t use the character `|`!')

    const greeting = `${a[0].replace('<#', '').replace('>', '')}|${a.slice(1).join(' ')}`
    d.put(name, greeting, e => {
        if (e) return m.channel.send('Failed to set the goodbye message. Contact BarkingDog#4975.')
        else m.channel.send(`The bot will now send **${a.slice(1).join(' ')}** in ${a[0]} when someone leaves!`)
    })*/
}

exports.data = {
    'names': ['goodbye', 'leave'],
    'perms': 'MANAGE_MESSAGES',
    'help': {
        'category': 'mod',
        'text': 'Set goodbye messages',
        'usage': '[#channel text]'
    }
}
