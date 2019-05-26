const Bark = require('../../bot')

exports.run = async (m, a) => {
    const member = a[0]
    if (!member || member.toString().length !== 18 || isNaN(member)) return m.channel.send(`Use a valid user ID!`)

    const reason = a.slice(1).join(' ') || 'No reason provided'
    if (reason.length > 450) return m.channel.send('The reason is too long.')

    if (m.guild.members.get(member)) return m.channel.send('They are already in the server, use `ban <@id>`')

    const embed = Bark.embed()
        .setAuthor(`ID: ${member}`)
        .addField(`Hackbanned from ${m.guild.name}`, `Reason: ${reason}`)
        .setFooter(`Moderator: ${m.author.tag}`, m.author.displayAvatarURL)

    m.guild.ban(member, `Hackbanned by ${m.member.displayName} for: ${reason}`)
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['hackban', 'hb', 'supersnap'],
    'perms': 'BAN_MEMBERS',
    'help': {
        'category': 'mod',
        'text': 'Ban a user before they join',
        'usage': 'UserID'
    }
}
