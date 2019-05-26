const Bark = require('../../bot')
const d = Bark.d

exports.run = async (m, a) => {
    if (!a[0]) return m.channel.send('Usage: `set name = value` / `get/del value`')
    let valnm = a.slice(1).join(' ').split(' = ').slice(0, 1)

    if (a.slice(0, 1)[0] == 'set') {
        let val = a.slice(1).join(' ').split(' = ').slice(1).join(' ')
        d.put(valnm, val, err => {
            if (err) return m.reply('Failed to set key ' + valnm).then(console.log(err))
        })
    }
    if (a.slice(0, 1)[0] == 'get') {
        d.get(valnm, (err, value) => {
            if (err) return m.reply('Failed to find key ' + valnm).then(console.log(err))
            m.reply(`${valnm} = ${value}`)
        })
    }
    if (a.slice(0, 1)[0] == 'del') {
        d.del(valnm, err => {
            if (err) return m.reply('Failed to find key ' + valnm).then(console.log(err))
        })
    }
    m.delete()
}

exports.data = {
    'names': ['level', 'database', 'l'],
    'perms': 'BOT_OWNER',
    'help': {
        'category': '',
        'text': '',
        'usage': ''
    }
}
