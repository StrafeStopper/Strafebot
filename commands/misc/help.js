const Bark = require('../../bot')
const loader = require('../../components/commandLoader')

exports.run = async (m, a) => {
    let embed = Bark.embed()
        .setAuthor('Help', Bark.b.user.displayAvatarURL)

    function sendHelp() {
        description = []
        loader.categories.forEach(category => {
            description = description.concat([`\`${Bark.c.prefix}help ${category}\``])
        })
        embed.addField('Categories', `To see help use: \`${Bark.c.prefix}help all\` (very long) / ${description.join(' / ')}`)
    }

    if (!a[0]) {
        sendHelp()
    } else if (a[0]) {
        if (loader.categories.includes(a[0].toLowerCase())) {
                embed.addField(a[0][0].toUpperCase() + a[0].substring(1), loader.help.get(a[0].toLowerCase()))
        } else if (a[0].toLowerCase() == 'all') {
            loader.categories.forEach(category => {
                embed.addField(category[0].toUpperCase() + category.substring(1), loader.help.get(category))
            })
        } else {
            sendHelp()
        }
    }

    m.channel.send({embed})
    m.delete()
}

exports.data = {
    'names': ['help', 'commands'],
    'perms': '',
    'help': {
        'category': 'misc',
        'text': 'Get some help',
        'usage': ''
    }
}
