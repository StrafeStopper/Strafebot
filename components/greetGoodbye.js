const Bark = require('../bot')
const b = Bark.b
const d = Bark.d

exports.run = async () => {
    // Member guild join
	
	
    b.on('guildMemberAdd', member => {
		let oldRole = member.guild.roles.find(r => r.name === "new-user")
		member.addRole(oldRole).catch(console.error)
        d.get(`${member.guild.id}|greet`, function (e, r) {
            if (!e) b.channels.get(r.split('|')[0])
					.send({embed: { 
					color: 3447003,
					description: r.split('|')[1].replace('%s', member.guild.name).replace('%n', member)}})
        })
    })
	
	
    // Member guild leave
    b.on('guildMemberRemove', member => {
        d.get(`${member.guild.id}|leave`, function (e, r) {
            if (!e) b.channels.get(r.split('|')[0])
                .send(r.split('|')[1].replace('%s', member.guild.name).replace('%n', member.displayName))
        })
    })
}
