const Bark = require('../../bot')

exports.run = async (m, a) => {
    // Command's code
	let target = m.mentions.members.first()
	let role = m.guild.roles.find(r => r.name === "consent")

	target.addRole(role).catch(console.error)

	m.channel.send({embed: {
		color: 3447003,
		description: `${target} **has been given consent to smash by **${m.author}**!**`}})
	m.delete()
}

exports.data = {
    'names': ['consent', 'pleasesex'],
    'perms': '',
    'help': {
        'category': 'misc',
        'text': 'Gives someone consent to smash!',
        'usage': '<user>'
    }
}
