# Usage

This is a guide explaining how to run the bot

### Step 1

Don't. Seriously. Don't you have anything better to do?

## Getting started

First of all, read [THE LICENSE](../LICENSE.md). You have to do it.

## Installing software

Download and install:

* [Node.js](https://nodejs.org/en/download/)

* [Git](https://git-scm.com/downloads)

**After installing node.js**, open a console window **AS ADMINISTATOR** (cmd, powershell etc.)

Run this command:

* For windows:
    * > npm i --g windows-build-tools

* For linux (ubuntu/debian):

    * > sudo apt-get install build-essential

This might take some time.

## Installing the bot

FORK THE REPOSITORY, then:

Download the bot using:

> git clone <your forked repo's link>

Since the bot is [licensed under AGPL 3.0](../LICENSE.md) and that means that you **have** to keep it open source. The easiest way to do it is to fork the repository before cloning it and then using your own link to download it. The repository has to be public and not private.

Go into the repository folder:

> cd barking-bot-new

Install the modules using:

> npm i

**For music support** you also need to run this:

    * Any OS:
    > npm i --g ffmpeg-binaries

    * Or linux only (faster):
    > sudo apt-get install ffmpeg

This WILL take a few minutes. If you get errors, read them and fix the issues.

The modules have to be installed for the next step to work.

## Configuration

Find the file named `config_template.json` and rename it to `config.json`

Open it with a text editor and set the values:

```json
{
    "token":"token",
    "prefix":"d.",
    "owners":["254314923771822080"],
    "defaultStatus":"dnd",
    "botName":"BarkingBot",
    "guildBlacklist":[""],
    "userBlacklist":[""],
    "color":"00ff00",
    "music":true,
    "logCommands":false
}
```

Go to the [discord developer portal](https://discordapp.com/developers/applications) and create an application.

* Go to bot, click add bot, copy the `token`. Set this in the config

* Set a command `prefix`

* Set `owners` to your user id

* Optional:

    * `defaultStatus` - the status the bot will have when it logs in: online, idle, dnd or invisible
    * `botName` - bot's name used in info and other commands
    * `color` - the color used in all embeds
    * `music` - sets if the music is enabled or not

DO NOT set `logCommands` to true unless you're testing, as logging this is against the ToS.

## Invite the bot to your server

Copy the client id from the [discord developer portal](https://discordapp.com/developers/applications)

Then, [create a bot invite](https://discordapi.com/permissions.html#8). Set the permissions to "Administator"

Finally, invite the bot to your server.

## Start the bot!

Open a console window in the `barking-bot-new` directory.

To start the bot, simply use:

> node bot

## That's it!

The bot should now be running!

To stop it use: `!stopbot` (where `!` is the prefix you set), to restart run `node bot` again.

## Adding commands

Check out [adding_commands.md](adding_commands.md)