const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
    m.channel.send('Raping is disabled for this server!')
    m.delete()
    
    /*const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Mention someone to smacc with your tiddys!')

    const embed = Bark.embed()
    .setDescription(`${m.author} **smacced** ${member} **with their tiddys!**`)
    .setImage(resources.images.hug[Math.floor(Math.random() * resources.images.hug.length)])
    m.channel.send({embed})
    m.delete()*/
}

exports.data = {
    'names': ['rape', 'noconsent', 'billcosby'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Fuck someone!',
        'usage': '@member'
    }
}
