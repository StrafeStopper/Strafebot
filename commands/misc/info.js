const Bark = require('../../bot')

exports.run = async (m, a) => {
    // If you ever decide to change this file,
    // Please do not remove the credit. Thanks!
    const embed = Bark.embed()
    .setAuthor('Info', Bark.b.user.displayAvatarURL, 'https://barking-dog.xyz/bb/git')
    .addField(Bark.c.botName, 'This is a multifunctional, open source discord bot made by BarkingDog#4975')
    .addField('Stats', `Running in ${Bark.b.guilds.size} servers with the global prefix \`${Bark.c.prefix}\`\n The owner is: <@${Bark.c.owners[0]}>`)
    .addField('Useful links', 'Invite: https://barking-dog.xyz/bb/inv\n Report bugs: https://barking-dog.xyz/bb/bug (**GitLab account required**)\nGitLab repo: https://barking-dog.xyz/bb/git')
    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['info', 'stats', 'information', 'invite', 'bugs', 'server'],
    'perms': '',
    'help': {
        'category': 'misc',
        'text': 'See info about the bot',
        'usage': ''
    }
}
