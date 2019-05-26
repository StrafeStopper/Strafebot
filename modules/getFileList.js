const fs = require('fs')

exports.run = function (dir) {
    let results = []
    
    fs.readdirSync(dir).forEach(file => {
        file = dir + '/' + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) {
            results = results.concat(exports.run(file))
        } else results.push(file)
    })
    return results
}
