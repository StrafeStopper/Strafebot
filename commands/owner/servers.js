const Bark = require('../../bot')

exports.run = async (m, a) => {
    const embed = Bark.embed()
    .setTitle(`${Bark.c.botName} is in ${Bark.b.guilds.size} servers:`)
    .setDescription(Bark.b.guilds.map(g => g.name).join('\n'))
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['servers', 'guilds'],
    'perms': 'BOT_OWNER',
    'help': {
        'category': '',
        'text': '',
        'usage': ''
    }
}
