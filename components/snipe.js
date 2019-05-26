const Bark = require('../bot')
exports.deleted = []

exports.run = async () => {
    Bark.b.on('messageDelete', m => {
        if (m.content && !m.author.bot)
            exports.deleted[m.channel.id + m.author.id] = m.content
    })
}