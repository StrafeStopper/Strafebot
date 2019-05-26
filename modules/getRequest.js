const https = require('https')

module.exports = function (url, callback) {
    let data = ' '

    https.get(url, resp => {

        resp.on('data', chunk => {
            data += chunk
        })
        resp.on('end', () => {
            data = JSON.parse(data)
            callback(data)
        })

    }).on('error', err => {
        console.log(`Error: ${err.message}`)
    })
}
