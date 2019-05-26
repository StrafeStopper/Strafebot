const Bark = require('../../bot')
// Optional music modules
let ytdl
let ytSearch
try {
    ytdl = require('ytdl-core')
    ytSearch = require('yt-search')
} catch (e) {
    console.log('ytdl-core or yt-search not found, music module disabled.')
}

const playingList = new Map()
let playing = 0
exports.dispatcher = []

exports.run = async (m, a) => {
    // Enforces correct use
    if (!Bark.c.music || !ytdl || !ytSearch) return m.channel.send('The \`music\` module is disabled!')

    if (!m.member.voiceChannel) return m.channel.send('Please join a voice channel!')

    const request = a.join(' ')
    if (!request) return m.channel.send('Provide a request!')
    if (request.length > 256) return m.channel.send('The request is too long!')

    if (playingList.get(m.guild.id)) return m.channel.send('Playlists are still WIP - already playing in this server.')
    if (playing > 2) return m.channel.send('This bot can play music in up to 2 servers at a time. Try again later.')

    ytSearch(request, function (e, r) {
        if (!r.videos[0] || e) return m.channel.send(`Nothing was found for **${request}**`)
        playSong(r.videos[0])
    })

    function nowPlaying(r) {
        const embed = Bark.embed()
            .setAuthor('Now playing', 'https://i.imgur.com/Q2eRAkS.png', `https://www.youtube.com/watch?v=${r.videoId}`)
            .setDescription(r.title)
            .setThumbnail(`https://img.youtube.com/vi/${r.videoId}/1.jpg`)
            .setFooter(`${r.duration.timestamp} | Requested by: ${m.author.username}`)
        m.channel.send({embed})
    }

    function playSong(r) {
        playingList.set(m.guild.id, true)
        playing++
        nowPlaying(r)

        const voiceChannel = m.member.voiceChannel
        // Joins the voice channel
        voiceChannel.join().then(connection => {
            // Gets a stream of the song
            const stream = ytdl(`https://www.youtube.com/watch?v=${r.videoId}`, {
                filter: 'audioonly',
                highWaterMark: 2097152 // 2 mb
            })
            // Plays the song
            const dispatcher = connection.playStream(stream)

            // When the song ends
            dispatcher.on('end', () => {
                voiceChannel.leave()
                playingList.set(m.guild.id, false)
                playing--
                const embed = Bark.embed()
                    .setAuthor('Finished playing', 'https://i.imgur.com/Q2eRAkS.png', `https://www.youtube.com/watch?v=${r.videoId}`)
                    .setDescription(r.title)
                    .setThumbnail(`https://img.youtube.com/vi/${r.videoId}/1.jpg`)
                    .setFooter('Use <play keywords> to play a new song')
                m.channel.send({embed})
            })

            // Error handling
            dispatcher.on('error', e => { console.log(e) })

            exports.dispatcher[m.guild.id] = {
                stop: function () {
                    if (dispatcher) dispatcher.end()
                    else playingList.set(m.guild.id, false)
                },
                pause: function () {
                    if (playingList.get(m.guild.id)) dispatcher.pause()
                    else m.channel.send('Nothing is being played!')
                },
                resume: function () {
                    if (playingList.get(m.guild.id)) dispatcher.resume()
                    else m.channel.send('Nothing is being played!')
                },
                leave: function () {
                    voiceChannel.leave()
                    dispatcher.end()
                },
                np: function () {
                    if (playingList.get(m.guild.id)) nowPlaying(r)
                    else m.channel.send('Nothing is being played!')
                }
            }
        }).catch(e => console.log(e))
    }
}

exports.data = {
    'names': ['play', 'add'],
    'perms': '',
    'help': {
        'category': 'music',
        'text': 'Play a song in VC',
        'usage': 'keywords'
    }
}
