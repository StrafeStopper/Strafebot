const Bark = require('../../bot')

exports.run = async (m, a) => {
    // Command's code
	let member = m.member
	let target = m.guild.members.get(a[0])
	if(!target.some(r=>["consent"].includes(r.name))) {
		let role = m.guild.roles.find(r => r.name === "consent")

	target.addRole(role).catch(console.error)

	m.channel.send({embed: {
		color: 3447003,
		description: `${target} **has been given consent to smash by **${m.author}**!**`}})
	m.delete()
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
