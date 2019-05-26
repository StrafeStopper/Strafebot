const Bark = require('../../bot')
const request = require('../../modules/getRequest')

exports.run = async (m, a) => {
  //m.channel.send('disabled')
    request('https://dog.ceo/api/breeds/image/random', function(r) {
        const embed = Bark.embed()
        .setTitle('The dog.')
        .setImage(r.message)
        m.channel.send({embed})
    })
    m.delete()
}

exports.data = {
    'names': ['dog', 'woof', 'bark', 'dogimage'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Get an image of a dog',
        'usage': ''
    }
}
