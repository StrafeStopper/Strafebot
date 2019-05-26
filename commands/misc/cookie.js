const Bark = require('../../bot')

exports.run = async (m, a) => {
    const who = m.mentions.members.first() || 'everyone'
    const embed = Bark.embed()
    .setDescription(`**${m.author}** gave **${who}** a cookie! :cookie:`)
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['cookie'],
    'perms': '',
    'help': {
        'category': 'misc',
        'text': 'Give someone a cookie!',
        'usage': '[@member]'
    }
}
