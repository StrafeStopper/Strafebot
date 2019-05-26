const Bark = require('../../bot')
const ds = require('discord.js')

exports.run = async (m, a) => {
    if (!a[0]) return m.channel.send('Provide _something._')

    function clean(text) {
        if (typeof (text) === 'string')
            return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
        else
            return text
    }
    try {
        const code = a.join(' ')
        let evaled = eval(code)

        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled)

        m.channel.send(clean(evaled), {
            code: 'xl'
        })
    } catch (err) {
        m.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
    }
    m.delete()
}

exports.data = {
    'names': ['eval', 'e'],
    'perms': 'BOT_OWNER',
    'help': {
        'category': '',
        'text': '',
        'usage': ''
    }
}
