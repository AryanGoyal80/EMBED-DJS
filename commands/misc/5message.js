const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    commands: ['A'],
    minArgs: 0,
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments, text) => {

        const private = require('../../private-message')
        
        let BdayEmbed = new Discord.MessageEmbed()
          .setColor('#ca208b')
          .setTitle(`**Here are the wishings from the whole sv team** :partying_face:`)
          .setFooter(`Page 1`)
          .addFields(
              { name: '\u200B', value: 'Message:' },
              { name: `
              \n\n **From Berra-** \n Happyyy Birthdayy Larss!!!:partying_face: :partying_face: :partying_face: Thank you for all the things you have done for us,for the server.This server helped me a lot about so many things in my life and Im SOOO GRATEFUL for you for making this real,always helping us whenever we need,putting soooo much effort into this.You are really kind,funny and a wonderful person.I hope you achieve all of your goals and dreams this year.Sending lots of love and positive energy. All the bestt in your new age :purple_heart: :purple_heart:
              \n\n **From Aya-** \n Robin/Lars/rap aspirant/Dutch dad, many hats and names and one "pure" soul yet so many talents!
              Thank you for everything you do for us on the server, what a home you guys have built!
              I wish you a very happy birthday, to make it through one more year as gracefully as you can :sparkles:
              - Mama Aya` },
              )
               
              private(client, 'ping', 'Pong!'),

              client.users.fetch('763285109280604180').then(user => {
                 user.send(BdayEmbed)
               } )
             
            },
            permissions: ['ADMINISTRATOR'],
            requiredRoles: []
        }

        client.login(process.env.DJS_TOKEN)