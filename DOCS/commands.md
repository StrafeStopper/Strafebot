# Commands

This file includes all of the bots' commands, the aliases and explains how to use them!

* `command` `it's aliases` / `similar command` This command does this.

    * > command's usage [optional arguments]

## Images

* `cat` / `dog` Sends a random cat/dog image

* `angry` / `dab` / `smug` / `disgust` `disgusting` Sends a random angry/dab/smug/disgust image

* `kiss` / `slap` `kill` / `hug` `cuddle` kisses/slaps/hugs a member

    * > kiss/slap/hug @member

* `youtube` `yt` `ytsearch` Searches for a video on youtube

    * > youtube keywords

## Misc

* `help` See a list of the bot's commands

* `stats` `information` `invite` `bugs` `server` Shows general information about the bot

* `ping` Sends the bot's ping

* `poll` `p` Creates a basic or advanced poll

    * > poll Question

    * > poll Question | Choice 1 | Choice 2 | Up to 9 choices

* `serverinfo` `guildinfo` `membercount` `members` Shows general info about the server

* `servers` `serverlist` `servercount` `count` `guilds` Shows a list of the servers the bot is in

* `urban` `ud` `define` Defines a word on urban dictionary. **Only works in nsfw channels**

    * > urban word

* `whois` `user` `userinfo` `memberinfo` Shows information about a member

    * > whois [@member]

* `randomcolor` `color` Generates a random color

* `cookie` Give someone a cookie

    * > cookie [@member]

* `fact` `facts` Sends animal facts

    * > fact cat/dog/panda

## Moderation

* `ban` `b` `bean` Bans a member

    * > ban @member [reason]

    * You need **BAN_MEMBERS** for this.

* `clear` `purge` `clean` `delete` Bulk deletes messages

    * > clear 99

    * You need **MANAGE_MESSAGES** for this.

* `hackban` `hb` Bans a user before they join

    * > hackban UserID [reason]

    * You need **BAN_MEMBERS** for this.

* `kick` `k` Kicks a member

    * > kick @member [reason]

    * You need **KICK_MEMBERS** for this.

* `rename` `nick` Renames a member or resets the nickname

    * > rename @member [new name]

    * You need **MANAGE_NICKNAMES** for this.

* `softban` `sb` Bans and then unbans a member (deletes their messages)

    * > softban @member [reason]

    * You need **BAN_MEMBERS** for this.

* `unban` `ub` Unbans a user

    * > unban UserID

    * You need **BAN_MEMBERS** for this.

* `warn` `w` Warns a member. Does not have a counter yet

    * > warn @member reason

    * You need **MANAGE_MESSAGES** for this.

* `snipe` See the last deleted message of a member

    * > snipe @member

    * You need **MANAGE_MESSAGES** for this.

## Music - WIP

Note that music does not support playlists yet.

* `play` `add` Plays a song from youtube in a voice channel

    * > play keywords

* `pause` / `unpause` `resume` / `stop` Pauses/unpauses/stops a song

* `nowplaying` `np` `playing` Shows what song is playing

* `leave` Leaves a voice channel if the bot is stuck

## Owner

You need to be the bot's owner to use these commands

* `dm` `senddm` DMs a member

    * > dm @member message

* `eval` `e` Executes code

    * > eval foo.bar()

* `ee` Executes code without output

    * > ee foo.bar()

* `level` `l` `database` Controls LevelDB

    * > level set name = value

    * > level get/del name

* `say` `talk` Makes the bot say something

    * > say message

* `status` Sets the bot's status

    * > status online/idle/dnd/invisible

* `stopbot` `s` `die` `kys` Logs out and stops the bot