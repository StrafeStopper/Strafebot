const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
  //m.channel.send('disabled')
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Mention someone to kiss!')

    if (member.id !== m.author.id) image = resources.images.kiss[Math.floor(Math.random() * resources.images.kiss.length)]
    else image = resources.images.selfkiss[0]

    const embed = Bark.embed()
    .setDescription(`${m.author} **kissed** ${member}`)
    .setImage(image)
    m.channel.send({embed})
    m.delete()

}

exports.data = {
    'names': ['kiss'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Kiss someone!',
        'usage': '@member'
    }
}
