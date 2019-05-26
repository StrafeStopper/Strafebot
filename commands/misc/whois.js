const Bark = require('../../bot')

exports.run = async (m, a) => {
    const member = m.mentions.members.first() || m.guild.members.get(a[0]) || m.member

    const embed = Bark.embed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .addField('Nickname', member.displayName)
    .addField('Registration date', member.user.createdAt.toISOString().split('T')[0])
    .addField(`Join date for ${m.guild.name}`, m.guild.member(member).joinedAt.toISOString().split('T')[0])
    .setThumbnail(member.user.displayAvatarURL)
    .setFooter(`ID: ${member.user.id}`)

    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['whois', 'user', 'userinfo', 'memberinfo'],
    'perms': '',
    'help': {
        'category': 'misc',
        'text': 'See info about a member',
        'usage': '[@member]'
    }
}
