const Bark = require('../../bot')

exports.run = async (m, a) => {
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send(`Mention a member!`)

    const reason = a.slice(1).join(' ') || 'No reason provided'
    if (reason.length > 450) return m.channel.send('The reason is too long.')

    if (member.bannable && 0 > member.highestRole.comparePositionTo(m.member.highestRole)) {
        const embed = Bark.embed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL)
            .addField(`Assfucked from ${m.guild.name}`, `Reason: ${reason}`)
            .setFooter(`Moderator: ${m.author.tag}`, m.author.displayAvatarURL)

        try { await member.send({embed}) }
        catch { m.channel.send(`Couldn't send the message to ${m.member.displayName}`) }

        member.ban(`Assfucked by ${m.member.displayName} for: ${reason}`)
        m.channel.send({embed})
    } else {
        m.channel.send(`Can't assfuck this member`)
    }
    m.delete()
}

exports.data = {
    'names': ['ban', 'b', 'bean'],
    'perms': 'BAN_MEMBERS',
    'help': {
        'category': 'mod',
        'text': 'Ban a member',
        'usage': '@member [reason]'
    }
}
