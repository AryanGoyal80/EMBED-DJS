const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    commands: ['Robin'],
    minArgs: 0,
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments, text) => {
        
        let BdayEmbed = new Discord.MessageEmbed()
          .setColor('#ca208b')
          .setTitle(`**Here are the wishings from the whole sv team** :partying_face:`)
          .setFooter(`Page 1`)
          .addFields(
              { name: '\u200B', value: 'Message:' },
              { name: `\n\n **From Pjay-** \n Happy Birthday Lars!!:100: Hope you have an amazing year ahead and achieve all the things you envision for the next year!:fire: You are one of the funniest and Jovial people i know. You are a true contributor to the betterment of this society by helping thousands of us so far study and be motivated do so by making this server and constantly improving it and making it better suited to our comforts constantly and that for free of cost. I can not fathom how much time,love and passion you have put into this. well i can tell you this: you have my gratitude for life for transforming me into a hard-worker,You get this credit. I still remember asking you why you put so much effort into this for no financial gain. You said one day i will be happy to one day know that i helped create a doctor pilot,scientist,engineer or great person emerges from here. Well,I will strive to be one of those people who reward you this satisfaction. Enjoy your birthday Lars,Just know that you are Pure gold in a majorly selfish world.:hearts:
              \n\n **From Rj-** \n Senior Lars,
              Happiest birthday :crown: :tada:
              May all you career plans come true :man_scientist: and May all your credit cards get heavily loaded :dollar:. You have helped so many people in so many ways, You are one of the best people I have came to know in person.
              Senior Lars, the 4chambers of my heart really grateful to know you.Thanks for all the advices regarding The PhD interviews.Thanks for making so many amazing bots and adding new features always.Thank you for making this amazing server that gave me a chance to meet so many good friends.MOST IMPORTANTLY THANK YOU FOR BEING WHO YOU ARE, BCZ YOU ARE AWESOME. Even if you are 14yr kid or 28yr man,you are best at both.
              Wish you all the happiness of the world.May all of your birthday wishes come true.
              Happy birthday Senior
              With lots of gratitude,love,wishes and prayers
              rj
              \n\n **From Jerry-** \n Ciao Lars, i wish you happy birthday and thousands of these happy days. Thanks for the effort you put everyday on the server, still, enjoy your birthday! :cake: :penguin:
              \n\n **From JayJ-**  \n Here is your wishing message
              Dear Lars, I am still used to Robin :joy:,
              HAPPY BIRHTDAY!!! :partying_face::partying_face: :g_mmPartyCelebrateMocha: :balloon: :champagne:
              You are seriously one of the most self-less, understanding, kind person I've ever met,
              What you've done for this server is create millions of smiles and great moments that all of us will never forget in our lives!
              You deserve the all of that joy back to you, and anything I can do or anyone can do for you let me or us know!
              I'm glad to call you friend and co-mod (or boss :p)
              I will sing you happy b-day anyday anytime so you remember my lovely singing :joy:
              - Love, your friend JJay
              \n\n **From Berra-** \n Happyyy Birthdayy Larss!!!:partying_face: :partying_face: :partying_face: Thank you for all the things you have done for us,for the server.This server helped me a lot about so many things in my life and Im SOOO GRATEFUL for you for making this real,always helping us whenever we need,putting soooo much effort into this.You are really kind,funny and a wonderful person.I hope you achieve all of your goals and dreams this year.Sending lots of love and positive energy. All the bestt in your new age :purple_heart: :purple_heart:
              \n\n **From Aya-** \n Robin/Lars/rap aspirant/Dutch dad, many hats and names and one "pure" soul yet so many talents!
              Thank you for everything you do for us on the server, what a home you guys have built!
              I wish you a very happy birthday, to make it through one more year as gracefully as you can :sparkles:
              - Mama Aya` },
              )
              client.users.fetch('763285109280604180').then(user => {
                user.send(BdayEmbed)
              } )
            },
            permissions: ['ADMINISTRATOR'],
            requiredRoles: []
        }