const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
  //m.channel.send('disabled')
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Mention someone to strangle!')

    const embed = Bark.embed()
    .setDescription(`${m.author} **strangled** ${member}`)
    .setImage(resources.images.strangle[Math.floor(Math.random() * resources.images.strangle.length)])
    m.channel.send({embed})
    m.delete()

}

exports.data = {
    'names': ['strangle', 'choke'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Strangle someone!',
        'usage': '@member'
    }
}
