const Bark = require('../bot') // Requires the main bot file
const b = Bark.b

exports.run = async () => {
    b.on('message', m => {
        // If the message starts with the prefix
        if (m.content.startsWith(Bark.c.prefix)) {
            // Stop if not a text channel
            if (m.channel.type !== 'text') return
            // Stop if the author is a bot
            if (m.author.bot) return
            // Stop if the user is blacklisted
            if (Bark.c.userBlacklist.includes(m.author.id)) return
            // Defines the command's name
            const cmd = m.content.replace(Bark.c.prefix, '').split(' ').slice(0, 1)
            // Defines arguments (args, a)
            const a = m.content.split(' ').slice(1)
            // Finds the command
            const command = Bark.commands.get(cmd[0].toLowerCase())
            // If the command is found
            if (command) {
                // Checks if the command is owner only. If not, sends an error.
                if (command.data.perms == 'BOT_OWNER' && !Bark.c.owners.includes(m.author.id))
                    return m.reply('No permission - you need `BOT_OWNER`')
                // Checks permissions. If wrong, sends an error.
                if (command.data.perms !== 'BOT_OWNER' && command.data.perms && !m.member.hasPermission(command.data.perms))
                    return m.reply(`No permission - you need \`${command.data.perms}\``)
                // If everything went well, finally runs the command
                try {
                    command.run(m, a)
                } catch (err) {
                    console.error(`Error while running a command\n${err}`)
                }
                // The logger is here only for testing. DO NOT USE this in production. Only for testing.
                if (Bark.c.logCommands)
                    console.log(`'${m.member.displayName} / ${m.author.tag} / ${m.author.id}' in '${m.guild.name}' used: ${m.content}`)
            }
        } else {
            if (m.channel.type == 'dm' && !m.author.bot) return Bark.b.users.get(Bark.c.owners[0])
                .send(`\`${m.author.tag}\` / \`${m.author.id}\` said: ${m.content}`)
            if (m.content == `<@!${b.user.id}>`) return m.channel.send(`The prefix is \`${Bark.c.prefix}\``)
        }
    })
}