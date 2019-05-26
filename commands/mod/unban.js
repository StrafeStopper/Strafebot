const Bark = require('../../bot')

exports.run = async (m, a) => {
    const id = a[0]
    if (!id || id.toString().length !== 18 || isNaN(id)) return m.channel.send(`Use a valid user ID!`)

    const bans = await m.guild.fetchBans()
    if (!bans.has(id)) return m.channel.send('They are not banned.')

    const embed = Bark.embed()
        .setAuthor(`ID: ${id}`)
        .setTitle(`Unbanned from ${m.guild.name}`)
        .setFooter(`Moderator: ${m.author.tag}`, m.author.displayAvatarURL)

    m.channel.send({embed})

    m.guild.unban(id, `Unbanned by ${m.member.displayName}`)
    m.delete()
}

exports.data = {
    'names': ['unban', 'ub'],
    'perms': 'BAN_MEMBERS',
    'help': {
        'category': 'mod',
        'text': 'Unban a user',
        'usage': 'UserID'
    }
}
