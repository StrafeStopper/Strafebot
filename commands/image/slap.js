const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
  //m.channel.send('disabled')
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Mention someone to slap!')

    const embed = Bark.embed()
    .setDescription(`${m.author} **slapped** ${member}`)
    .setImage(resources.images.slap[Math.floor(Math.random() * resources.images.slap.length)])
    m.channel.send({embed})
    m.delete()

}

exports.data = {
    'names': ['slap', 'kill'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Slap someone!',
        'usage': '@member'
    }
}
