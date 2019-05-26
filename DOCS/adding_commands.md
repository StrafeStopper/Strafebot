# Adding commands

So you want to add a command? It's easy!

# Getting started

Go to the commands folder and create a file `command_name.js`

# Coding

Start with this:

```js
const Bark = require('../../bot')

exports.run = async (m, a) => {
    // Command's code
}

exports.data = {
    'names': ['name', 'alias', 'anotheralias'],
    'perms': 'BOT_OWNER',
    'help': {
        'category': 'misc',
        'text': 'This isn\'t a real command',
        'usage': '@member [reason]'
    }
}
```

* `m` = the message object, `a` = an array of all words after the command's name - arguments.

* To access the client use `Bark.b`, config - `Back.c`, database - `Bark.d`

* The `data` object:

	* Names is an array of the command's names. Needs at least 1.
	* Perms - permissions a user needs to run the command (optional)
		* Can be `BOT_OWNER`
	* Help:
		* Category: command's category in help (all lowercase) (optional)
		* Text: command's help (optional)
		* Usage: command's usage (optional)

* Save the file and restart the bot.

# Embeds

It's easier to create embeds with BarkingBot. 

```js
const embed = Bark.embed()
.setTitle(...)

m.channel.send({embed})
```

This way it's shorter and you don't have to set the color.

The color is automatically set to the one provided in the config.

# Args

They are pretty much `m.content.split(' ').slice(1)`: Array of words in the message without the first one (the command name).

For example:

```js
// Command: say
m.channel.send(a.join(' '))
```

This will send everything in the message apart the first word (the command name.)

So `!say beep boop` would send `beep boop`

# Sleep

```js
async function sleeping() {
	foo()
	await Bark.sleep(1000)
	bar()
}
```

Waits for `n` miliseconds. Only valid in async.

# Advice

The whole bot is built using discord.js. If you need help, **read the docs**.

The docs have LOTS of useful information: all classes, methods and even some examples.

You can find the discord.js docs [**HERE**](https://discord.js.org/#/docs/main/stable/general/welcome)

You can find a Javascript guide [**HERE**](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

Don't just bug people with stupid questions like "How do I make my bot go online?" or "How to I join an array?"! **Read the DOCS.**