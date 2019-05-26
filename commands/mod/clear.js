const Bark = require('../../bot')

exports.run = async (m, a) => {
    const number = a[0]
    if (isNaN(number) || !number || number > 99 || number < 1) return m.channel.send('Use a number from 1 to 99!')
    
    await m.channel.bulkDelete(Number(number) + 1)
    const embed = Bark.embed()
    .setDescription(`Yote ${number} messages!`)
    m.channel.send({embed}).then(m2 => m2.delete(500))
}

exports.data = {
    'names': ['clear', 'purge', 'clean', 'delete', 'yeet'],
    'perms': 'MANAGE_MESSAGES',
    'help': {
        'category': 'mod',
        'text': 'Bulk delete messages',
        'usage': '1-99'
    }
}
