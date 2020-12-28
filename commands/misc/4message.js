const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    commands: ['Penguin'],
    minArgs: 0,
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments, text) => {
        
        let BdayEmbed = new Discord.MessageEmbed()
          .setColor('#ca208b')
          .setTitle(`**Here are the wishings from the whole sv team** :partying_face:`)
          .setFooter(`Page 1`)
          .addFields(
              { name: '\u200B', value: 'Message:' },
              { name: `\n\n **From JayJ-**  \n Here is your wishing message
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

        client.login(process.env.DJS_TOKEN)