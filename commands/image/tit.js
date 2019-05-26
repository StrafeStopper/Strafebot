const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Mention someone to smacc with your tiddys!')

    const embed = Bark.embed()
    .setDescription(`${m.author} **smacced** ${member} **with their tiddys!**`)
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['tit', 'tiddy', 'smacc', 'tiddysmacc'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Smacc someone with your tiddys!',
        'usage': '@member'
    }
}
