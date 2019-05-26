const Bark = require('../bot') // Requires the main bot
const getFileList = require('../modules/getFileList')

exports.run = function () {
    Bark.commands = new Map()
    exports.help = new Map()
    exports.categories = []
    
    // Gets a list of all files
    const commands = getFileList.run('./commands')
    // Logs the start of the loading process
    console.log(`\nLoading ${commands.length} commands...`)
    
    commands.forEach(cmddir => {
        const command = require('.' + cmddir)
        
        // Pushes to commands' map
        command.data.names.forEach(name => {
            Bark.commands.set(name, command)
        })

        // Help loader. This is a mess, but I am not touching it ever again
        if (command.data.help.category) {
            const cmd = command.data
            if (command.data.help.usage)
                help = `\`${Bark.c.prefix}${cmd.names[0]}\` - ${cmd.help.text} \`${Bark.c.prefix}${cmd.names[0]} ${cmd.help.usage}\``
            else help = `\`${Bark.c.prefix}${cmd.names[0]}\` - ${cmd.help.text}`
            // Pushes to map
            exports.help.set(command.data.help.category, `${exports.help.get(command.data.help.category) || ''}\n${help}`)
            exports.help.set('all', `${exports.help.get('all') || ''}\n${help}`)
            // Exports categories
            if (!exports.categories.includes(command.data.help.category)) 
                exports.categories = exports.categories.concat([command.data.help.category])
        }

    })
    // Logs loaded commands
    console.log(`${commands.length} commands with ${Bark.commands.size} names were loaded!`)
}
