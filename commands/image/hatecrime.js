const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
  //m.channel.send('disabled')
    const embed = Bark.embed()
    .setAuthor(`${m.member.displayName} committed a hate crime!`, m.author.displayAvatarURL)
    .setImage(resources.images.dab[Math.floor(Math.random() * resources.images.dab.length)])
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['hatecrime', 'hate', 'commitahatecrime'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'warning: illegal or some shit',
        'usage': ''
    }
}
