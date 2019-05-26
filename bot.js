const ds = require('discord.js') // Discord.js
const level = require('level') // Level db

exports.c = require('./config.json') // Bot config
exports.d = level('./DB') // Level client
exports.b = new ds.Client({
    disableEveryone: true,
    disabledEvents: require('./resources.json').events
}) // Discord client

exports.b.login(exports.c.token) // Logs in

// Runs everything from the `components` directory
const modules = require('./modules/getFileList').run('./components')
modules.forEach(component => {
    require(component).run()
})

// To use: `const embed = Bark.embed().setTitle(...)`
exports.embed = (color) => {
    return new ds.RichEmbed().setColor(color || exports.c.color)
}

// To use: in async `await Bark.sleep(ms)`
exports.sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}
