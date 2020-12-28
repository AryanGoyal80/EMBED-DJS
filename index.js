const path = require('path')
const fs = require('fs')

const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const private = require('./private-message')
const { O_DIRECTORY } = require('constants')


client.on('ready', () => {
    console.log('The bot is online!')

    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = dir => {
      const files = fs.readdirSync(path.join(__dirname, dir))
      for (const file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file))
        if (stat.isDirectory()) {
          readCommands(path.join(dir, file))
        } else if (file !== baseFile) {
          const option = require(path.join(__dirname, dir, file))
          commandBase(client, option)
        }
      }
    }

    readCommands('commands')
      
    private(client, 'ping', 'Pong!')

    client.users.fetch('763285109280604180').then(user => {
      user.send(`**From Aya-** \n Robin/Lars/rap aspirant/Dutch dad, many hats and names and one "pure" soul yet so many talents!
      Thank you for everything you do for us on the server, what a home you guys have built!
      I wish you a very happy birthday, to make it through one more year as gracefully as you can :sparkles:
      - Mama Aya`)
    })

    client.user.setPresence({
      game: { 
          name: 'Improving',
          type: 'WATCHING'
      },
      status: 'Online'
  })


    })

    client.login(process.env.DJS_TOKEN)