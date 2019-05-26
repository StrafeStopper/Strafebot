const Bark = require('../../bot')
const getRequest = require('../../modules/getRequest')

exports.run = async (m, a) => {
    //if (!m.channel.nsfw) return m.channel.send('This command is only available in NSFW channels!')

    if (!a[0]) return m.channel.send('Provide a word!')
    if (a.join(' ').length > 128) return m.channel.send('The request is too long!')

    getRequest('https://api.urbandictionary.com/v0/define?term=' + a.join('%20'), async r => {
        if (!r.list[0]) return m.channel.send(`Nothing found for **${a.join(' ')}**`)

        const embed = Bark.embed()
        .setAuthor(a.join(' '), 'https://i.imgur.com/xq2FCVq.png')
        .addField('Definition', r.list[0].definition.slice(0, 512))
        .addField('Examples', r.list[0].example.slice(0, 512))

        m.channel.send({embed})
    })
    m.delete()
}

exports.data = {
    'names': ['urban', 'ud', 'define'],
    'perms': '',
    'help': {
        'category': 'search',
        'text': 'Define a word on urban dict.',
        'usage': 'word'
    }
}
