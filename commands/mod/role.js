const Bark = require('../../bot')

exports.run = async (m, a) => {
    //m.channel.send('disabled')
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Please mention a member!')

    const rolename = a.slice(1).join(' ')
    const role = m.guild.roles.find(r => r.name.toLowerCase().includes(rolename))
    if (!role) return m.channel.send(`Couldn't find **${rolename}**`)

    if (member.manageable && 0 > member.highestRole.comparePositionTo(m.member.highestRole)) {
        if (member.roles.has(role.id)) {
            member.removeRole(role.id)
            m.channel.send(`Removed **\`${role.name}\`** from ${member}`)
        } else {
            member.addRole(role.id)
            m.channel.send(`Added **\`${role.name}\`** to ${member}`)
        }
    } else return m.channel.send('No permission!')
    m.delete()
}

exports.data = {
    'names': ['role', 'giverole', 'addrole'],
    'perms': 'MANAGE_ROLES',
    'help': {
        'category': 'mod',
        'text': 'Add or remove a role',
        'usage': '@member role'
    }
}
