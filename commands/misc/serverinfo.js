const Bark = require('../../bot')

exports.run = async (m, a) => {
    const date = m.guild.createdAt.toISOString().split('T')[0]
    const embed = Bark.embed()
    .setAuthor(m.guild.name, m.guild.iconURL)
    .addField('Stats', `${m.guild.memberCount} members\n${m.guild.channels.size} channels\n${m.guild.roles.size} roles`)
    .addField('Owner', m.guild.owner)
    .setThumbnail(m.guild.iconURL)
    .setFooter(`ID: ${m.guild.id} | Created: ${date}`)
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['serverinfo', 'guildinfo', 'membercount', 'members'],
    'perms': '',
    'help': {
        'category': 'misc',
        'text': 'See info about the server',
        'usage': ''
    }
}
