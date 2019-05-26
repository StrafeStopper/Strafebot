const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
//m.channel.send('disabled')
    const embed = Bark.embed()
    .setAuthor(`${m.member.displayName} is angry!`, m.author.displayAvatarURL)
    .setImage(resources.images.angry[Math.floor(Math.random() * resources.images.angry.length)])
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['angry'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Be angry!',
        'usage': ''
    }
}
