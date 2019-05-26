const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Mention someones ass to eat!')

    const embed = Bark.embed()
    .setDescription(`${m.author} **ate** ${member}**'s ass!**`)
    .setImage(resources.images.hug[Math.floor(Math.random() * resources.images.hug.length)])
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['ass', 'eatass', 'asseat', 'eat'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Eat someones ass!',
        'usage': '@member'
    }
}
