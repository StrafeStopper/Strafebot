const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
  //m.channel.send('disabled')
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Mention someone to hug!')

    const embed = Bark.embed()
    .setDescription(`${m.author} **hugged** ${member}`)
    .setImage(resources.images.hug[Math.floor(Math.random() * resources.images.hug.length)])
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['hug', 'cuddle'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Hug someone!',
        'usage': '@member'
    }
}
