const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
  m.channel.send('disabled')
    /*const facts = Object.keys(resources.facts)
    commands = []
    facts.forEach(fact => {
        commands = commands.concat([`\`fact ${fact}\``])
    })
    if (!facts.includes(a[0])) return m.channel.send(`Use ${commands.join(' / ')}`)

    const fact = resources.facts[a[0]][Math.floor(Math.random() * resources.facts[a[0]].length)]

    const embed = Bark.embed()
    .setTitle(`${a[0][0].toUpperCase() + a[0].substring(1)} fact`)
    .setDescription(fact)
    m.channel.send({embed})*/
}

exports.data = {
    'names': ['fact', 'facts'],
    'perms': '',
    'help': {
        'category': 'misc',
        'text': 'Get an animal fact',
        'usage': ''
    }
}
