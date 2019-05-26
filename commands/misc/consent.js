const Bark = require('../../bot')

exports.run = async (m, a) => {
    // Command's code
	let member = m.member
	let target = m.guild.members.get(a[0])
	if(!target.some(r=>["consent"].includes(r.name))) {
		let role = m.guild.roles.find(r => r.name === "consent")
		let oldRole = m.guild.roles.find(r => r.name === "new-user")

		m.channel.send({embed: {
			color: 3447003,
			description: 'Alright, you have been assigned the main role of "Acceptable Members of Society"'}})


		function addRoleNormal()
		{
			member.addRole(role).catch(console.error)
		}
		setTimeout(addRoleNormal, 2000)

		function removeRoleNormal()
		{
			member.removeRole(oldRole).catch(console.error)
		}
		setTimeout(removeRoleNormal, 4000)
	}
	m.channel.bulkDelete(2)
}

exports.data = {
    'names': ['normal'],
    'perms': '',
    'help': {
        'category': 'misc',
        'text': 'tells the bot you are part of the normal category',
        'usage': '.normal'
    }
}
