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
      \n\n **From Simran-** \n Happy Birthday Lars!!!:tada::tada::tada:... Thanks for making this server more efficient day by day. You are the reason that we all are here together and thanx for bringing good vibes around here. Wish you all the success and happiness on you birthday. Hope you have an amazing day!! :champagne_glass: :grin: 
      \n\n **From Derk-** \n Laaaaaaaaars, my boi, Happy Birthday! Another year older, another year wiser. Altough i don't know if you can get any wiser, because you're already the 'almanak' of the server. Sow, make it another unforgettable day and i'll see you around ; )
      \n\n  **From Betul-** \n Happy birthday, Robin! :partying_face: I hope your new age comes with luck. Thanks for being with us and giving us best place to study. I hope you reach your dreams and live a happy life. :heart:
      \n\n **From abhi.kr.2100-**  \n Here is your wishing message
      Happy 68th birthday, Lars! In just one year from now you'll become a real man. So difficult to believe! Jest aside, in my short history of playing poker, you were the first player to win my respect! And I shouldn't even get started on how important you have been and continue to be on the Study Vibes server!
      
      Now, this birthday wish won't have the "Abhishek"-feel without a joke. So here's one especially for you:
      
      A German-speaking person and a Dutch-speaking person enter a bar. They both get extremely drunk, and exit the bar as two Dutch-speakers.
       \n\n **From Zeynpbrfn-** \n happy birthday robinnnnnn :partying_face: i hope you have an amazing day! i can't thank you enough for what you are doing in this server, a lot of people are studying in peace and finding their motivation here and you are responsible for them! and you are such an amazing person, you are kind and you are like dad of this fam. i'm really grateful that i met you :smiling_face_with_3_hearts: i wish yoy the best in your life and please don't forget us :pleading_face: :green_heart:
       \n\n **From Swazmoh-** \n a very HAPPY BIRTHDAY to the person without whom we wouldnt even be doing this. :partying_face: :birthday: :tada: :confetti_ball: :heart:
       from the bottom of my heart, thank u for everything that u have done for us and for just being one incredible human being, thank u for all ur efforts man, we are all so grateful towards u. Ur a very hardworking and inspiring for every single person in the server, and i wish u all the best for ur upcoming years!
       God bless u, stay safe and happy as always, u deserve the very best. :pray:
       Have a great day and year ahead!
       Love u man :purple_heart: :yellow_heart:
       ~Moe :heart:
       \n\n **From Shaurya-** \n Happy birthday lars :partying_face: :cake:. Thank u so much from the bottom of my heart to do this much for us and always be available for peeps here even if you're busy. You are such a caring and a fun guy to be around. You are really motivating and hardworking person and I wish u all the best for your life ahead. God bless u brother. Take care and stay happy as always :white_heart: .
       Love u bro :white_heart:
       - Thomas Shelby :wink: xd
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