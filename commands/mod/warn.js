const Bark = require('../../bot')

exports.run = async (m, a) => {
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member || !a[1]) return m.channel.send('Mention a member and provide a reason!')

    const embed = Bark.embed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL)
        .addField(`Warned in ${m.guild.name}`, `Reason: ${a.slice(1).join(' ')}`)
        .setFooter(`Moderator: ${m.author.tag}`, m.author.displayAvatarURL)

    try { await member.send({embed}) }
    catch { return m.channel.send(`Couldn't send the message to ${m.member.displayName}`) }
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['warn', 'w'],
    'perms': 'MANAGE_MESSAGES',
    'help': {
        'category': 'mod',
        'text': 'Warn a member',
        'usage': '@member reason'
    }
}
