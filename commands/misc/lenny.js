const Bark = require('../../bot')

exports.run = async (m, a) => {
    // Command's code
	await m.channel.send('( ͡° ͜ʖ ͡°)')
	m.delete()
}

exports.data = {
    'names': ['lenny'],
    'perms': '',
    'help': {
        'category': 'misc',
        'text': 'you know what this is',
        'usage': ''
    }
}
