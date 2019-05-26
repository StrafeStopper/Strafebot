const Bark = require('../../bot')
const resources = require('../../resources.json')

exports.run = async (m, a) => {
    let target = m.mentions.members.first()
    if(!m.mentions.members.roles.some(r=>["consent"].includes(r.name))) {
      const embed = Bark.embed()
      .setDescription(`**Sorry,** ${target} **has not given you consent, raping is disabled on **${m.guild.name}**!**`)
      m.channel.send({embed})
      m.delete()
    } else if(m.mentions.members.roles.some(r=>["consent"].includes(r.name)))
    {
      const embed = Bark.embed()
      .setDescription(`${m.author} **had "consensual" sex with ** ${target}**!**`)
      m.channel.send({embed})
      member.removeRole()
      m.delete()
    }

    /*let role = m.guild.roles.find(r => r.name === "consent")
    const member = m.mentions.members.first() || m.guild.members.get(a[0])
    if (!member) return m.channel.send('Mention someone to have sex with!')

    const reason = a.slice(1).join(' ')
    if(!a[1]){ return m.channel.send(`${m.author}, please tell me if you had consent: **$sex <user> yes**`) }

     else if(a[1] == 'yes')
    {
      const embed = Bark.embed()
      .setDescription(`${m.author} **fucked** ${member}**!**`)
      m.channel.send({embed})
      member.removeRole()
      m.delete()
    }
    else {
    const embed = Bark.embed()
    .setDescription(`**Sorry,** ${m.author}, **you cannot rape** ${member}**!**`)
    m.channel.send({embed})
    m.delete()
  }*/
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
