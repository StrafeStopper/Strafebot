const Bark = require('../../bot')
let giph
try {
    giph = require('giph')
} catch {
    console.log('giph not found, gif module disabled.')
}

exports.run = async (m, a) => {
    if (!giph) return m.channel.send('The \`gif\` module is disabled!')

    const request = a.join(' ')
    if (!request) return m.channel.send('Provide a request!')
    if (request.length > 128) return m.channel.send('The request is too long!')

    let options = {rating: 'pg-13'}
    if (m.channel.nsfw) options = {rating: 'r'}

    giph(request, options, (e, r) => {
        if (e || !r) return m.channel.send(`Nothing found for **${request}**`)
        m.channel.send(r.url)
    })
    m.delete()
}

exports.data = {
    'names': ['gif', 'giphy'],
    'perms': '',
    'help': {
        'category': 'search',
        'text': 'Search for a gif',
        'usage': 'keywords'
    }
}
