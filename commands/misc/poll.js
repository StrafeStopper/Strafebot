const Bark = require('../../bot')
const emotes = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣']

exports.run = async (m, a) => {
    //await m.channel.bulkDelete(1)
    if (!a[0]) return m.channel.send('Provide a question!')

    if (a.join(' ').split('|')[1]) {
        const question = a.join(' ').split('|')[0]
        const choices = a.join(' ').split('|').slice(1)

        if (question.length > 256) return m.channel.send('The question is too long: up to 256 characters.')
        if (choices[9]) return m.channel.send('Up to 9 choices!')

        let i = 0
        let description = ''
        choices.forEach(choice => {
            description = `${description}\n${emotes[i]} ${choice}`
            i++
        })

        if (description.length > 2048) return m.channel.send('The choices are too long: up to 2048 characters in total.')

        const embed = Bark.embed()
            .setTitle(question)
            .setDescription(description)
            .setFooter(`Poll by ${m.author.tag}`, m.author.displayAvatarURL)
        await m.channel.send({embed}).then(async newM => {
            // Using `while` instead of `for` to not have semicolons.

            i = 0
            while (i < choices.length) {
                await newM.react(emotes[i])
                i++
            }
        })

    } else {
        if (a.join(' ').length > 256) return m.channel.send('The question is too long: up to 256 characters.')
        const embed = Bark.embed()
            .setTitle(a.join(' '))
            .setFooter(`Poll by ${m.author.tag}`, m.author.displayAvatarURL)
        m.channel.send({embed})
            .then(async newM => {
                await newM.react('✅')
                newM.react('❎')
            })
    }
    m.delete()
}

exports.data = {
    'names': ['poll', 'p'],
    'perms': 'MANAGE_MESSAGES',
    'help': {
        'category': 'misc',
        'text': 'Create a poll',
        'usage': 'question [| choice 1 | 2 | ... 9]'
    }
}
