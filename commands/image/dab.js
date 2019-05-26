const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
  //m.channel.send('disabled')
    const embed = Bark.embed()
    .setAuthor(`${m.member.displayName} dabs!`, m.author.displayAvatarURL)
    .setImage(resources.images.dab[Math.floor(Math.random() * resources.images.dab.length)])
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['dab'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Dab on them haters!',
        'usage': ''
    }
}
