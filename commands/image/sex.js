const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Mention someone to have sex with!')

    const reason = a.slice(1).join(' ')
    if(!a[1]){ return m.channel.send(`${m.author}, please tell me if you had consent: **$sex <user> yes**`) }

     else if(a[1] == 'yes')
    {
      const embed = Bark.embed()
      .setDescription(`${m.author} **fucked** ${member}**!**`)
      m.channel.send({embed})
      m.delete()
    }
    else {
    const embed = Bark.embed()
    .setDescription(`**Sorry,** ${m.author}, **you cannot rape** ${member}**!**`)
    m.channel.send({embed})
    m.delete()
   }
}

exports.data = {
    'names': ['sex', 'bang', 'kasplurt', 'fucc', 'fuck', 'fuk', 'notbillcosby'],
    'perms': '',
    'help': {
        'category': 'images',
        'text': 'Fuck someone!',
        'usage': '@member'
    }
}
