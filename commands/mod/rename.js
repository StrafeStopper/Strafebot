const Bark = require('../../bot')

exports.run = async (m, a) => {
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Please mention a member!')

    const name = a.slice(1).join(' ')
    if (name.length > 32) return m.channel.send('The nickname is too long.')

    if (member.manageable) {
        member.setNickname(name)
        const embed = Bark.embed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL)
            .addField('Updated nickname', name || 'Reset nickname')
            .setFooter(`Moderator: ${m.author.tag}`, m.author.displayAvatarURL)

        m.channel.send({embed})
    } else return m.channel.send('No permission')
    m.delete()
}

exports.data = {
    'names': ['rename', 'nick'],
    'perms': 'MANAGE_NICKNAMES',
    'help': {
        'category': 'mod',
        'text': 'Rename a member',
        'usage': '@member [name]'
    }
}
