const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
  //m.channel.send('disabled')
    const embed = Bark.embed()
    .setTitle('The cat.')
    .setImage(resources.images.cat[Math.floor(Math.random() * resources.images.cat.length)])
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['cat', 'meow'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Get an image of a cat',
        'usage': ''
    }
}
