const Bark = require('../../bot')
let ytSearch
try {
    ytSearch = require('yt-search')
} catch {
    console.log('yt-search not found.')
}

exports.run = async (m, a) => {
    if (!ytSearch) return m.channel.send('The youtube module is disabled.')

    const request = a.join(' ')
    if (request.length > 128) return m.channel.send('The request is too long.')
    if (!request) return m.channel.send('Provide a request!')

    m.channel.send(`Searching for **${request}**...`).then(m2 =>
        ytSearch(request, (err, r) => {
            if (err || !r.videos[0]) return m2.edit('No results.')
            else m2.edit(`https://www.youtube.com/watch?v=${r.videos[0].videoId}`)
        })
    )
    m.delete()
}

exports.data = {
    'names': ['youtube', 'yt', 'ytsearch'],
    'perms': '',
    'help': {
        'category': 'search',
        'text': 'Search on youtube',
        'usage': ''
    }
}
