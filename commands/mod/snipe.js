const Bark = require('../../bot')
const snipe = require('../../components/snipe')

exports.run = async (m, a) => {
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Please mention a member!')

    const msg = snipe.deleted[m.channel.id + member.id]
    if (!msg) return m.channel.send('No messages found')

    const embed = Bark.embed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL)
        .setDescription(msg)
        .setFooter(`Moderator: ${m.author.tag}`, m.author.displayAvatarURL)

    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['snipe'],
    'perms': 'MANAGE_MESSAGES',
    'help': {
        'category': 'mod',
        'text': 'See the last deleted message of a member',
        'usage': '@member'
    }
}
