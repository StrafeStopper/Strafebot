const Bark = require('../../bot')

exports.run = async (m, a) => {
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send(`Mention a member!`)

    const reason = a.slice(1).join(' ') || 'No reason provided'
    if (reason.length > 450) return m.channel.send('The reason is too long.')

    if (member.kickable && 0 > member.highestRole.comparePositionTo(m.member.highestRole)) {
        const embed = Bark.embed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL)
            .addField(`Fucked from ${m.guild.name}`, `Reason: ${reason}`)
            .setFooter(`Moderator: ${m.author.tag}`, m.author.displayAvatarURL)

        try { await member.send({embed}) }
        catch { m.channel.send(`Couldn't send the message to ${m.member.displayName}`) }

        member.kick(`Fucked by ${m.member.displayName} for: ${reason}`)
        m.channel.send({embed})
    } else {
        m.channel.send(`Can't fuck this member!`)
    }
    m.delete()
}

exports.data = {
    'names': ['kick', 'k', 'snap'],
    'perms': 'KICK_MEMBERS',
    'help': {
        'category': 'mod',
        'text': 'Kick a member',
        'usage': '@member [reason]'
    }
}
