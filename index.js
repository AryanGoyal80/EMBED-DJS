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
      user.send(`**From Rafael-** \n Hello Lars, thanks for being such an amazing person and for making the server work so well. I wish you a happy birthday and I hope that all your dreams will come true.:pinched_fingers: :pinched_fingers_tone1: :pinched_fingers_tone2: :pinched_fingers_tone3: :pinched_fingers_tone4: :pinched_fingers_tone5:  \n\n **From Mimi-**  \n Happy birthday my love :birthday: :heart: !
      I wish you a very nice day :3 You have now been part of my life for 8 month exactly ^^ Thank you for making me a better version of myself everyday, for showing love in all kinds of way, and for being the teasing annoying boiiiii sometimes :stuck_out_tongue:
      You are the penguin king of this server :penguin: ! (fits well with the snow queen, now that i think of it :thinking: :stuck_out_tongue_winking_eye: ) What you did for our community is amazing :blush:
      I am really proud of you :sparkling_heart:
      joyeux anniversaire mon amour :two_hearts:
      Mimi :flamingo:  \n\n **From Nadir-**  \n Hello My Son Robin ; thanx for being such a cool and awesome friend and mod for making the server always in good vibes for make it look like a peaceful home of our big family everyone of us really appreciate the effort you doing for us Happy birthday dude i really wish the best and success in your life and i hope your dream become true have a great day Lars ................... or Robin lool   \n\n **From Lisa_V-** \n Hiiii, hope you have a wonderful birthday, and that all your wishes may come true :partying_face: let's have a drink on ya bday :beers: :champagne_glass: \n\n **From Aryan-** \n Hello bro. I wish you an amazing bday :partying_face: . I hope you are enjoying your day. Many many happy returns of the day. You are really so friendly, awesome and cool guys here in the server. Thank you for doing so much for us. We all very greatful to you for your such marvelous works. :star_struck: Thanks for helping me every-time whenever I stuck in code :stuck_out_tongue_winking_eye: . You are really so awesome be like this only :smile: And yes enjoy your day don't drink too much :beers: :stuck_out_tongue: . Enjoy your day lars aka penguin :penguin: :partying_face: :partying_face: :tada:  
      \n\n **From Nandini-** \n Happy birthday Lars! :pancakes: :penguin~2: you're officially 89 and I'm so so happy for you :D Thank you for ALL that you do for our server, we are so grateful for it! You're such an amazing human being, with a very delightful sense of humor and it's just really fun being around you. I wish you the best birthday you can possible have and I hope you have a wonderful year ahead. Good luck for 2021, may you succeed in all your endeavors. Much love :sparkling_heart: - Nandini (you forgot my name the other day so i'm putting it all over my message so that it haunts you in your dreams :stuck_out_tongue:) 
      \n\n **From Ariadane-** \n Happy Birthday Lars, Hope you have a great day our penguin leader.    
      \n\n **From Lauren-** \n Happy birthday robin!!! I hope you have an amazing day today! thank you from the bottom of my heart for everything you do for our server. You have been the reason for so many amazing people finding a happy, motivating place on Study Vibes - and no one can thank you enough for that. so once again, i hope today is as brilliant as it should be for you
      - Laui
      
      ` )
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