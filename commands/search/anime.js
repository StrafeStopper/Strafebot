const Bark = require('../../bot')
let anifetch
try {
    anifetch = require('anifetch')
} catch {
    console.log('anifetch not found, anime module disabled.')
}

exports.run = async (m, a) => {
    if (!anifetch) return m.channel.send('The \`anime\` module is disabled!')

    const request = a.join(' ')
    if (!request) return m.channel.send('Provide a request!')
    if (request.length > 128) return m.channel.send('The request is too long!')

    anifetch('mal', 'anime', request).then(async r => {
        if (!r[0]) return m.channel.send(`Nothing found for **${a.join(' ')}**`)

        const embed = Bark.embed()
        .setAuthor(r[0].title_canonical, r[0].provider_avatar, r[0].url)
        .setThumbnail(r[0].cover)
        .addField('Synposis', r[0].synopsis)
        .setDescription(`${r[0].episodes || '?'} episodes | Rating: ${r[0].rating || '?'} / 100`)
        .setFooter(`${r[0].format} | ID: ${r[0].id}`)

        m.channel.send({embed})
    })
    m.delete()
}

exports.data = {
    'names': ['anime'],
    'perms': '',
    'help': {
        'category': 'search',
        'text': 'Search for an anime',
        'usage': 'anime'
    }
}
