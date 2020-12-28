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
              ` },
              )
              client.users.fetch('693351718263455755').then(user => {
                user.send(BdayEmbed)
              } )
            },
            permissions: ['ADMINISTRATOR'],
            requiredRoles: []
        }

        client.login(process.env.DJS_TOKEN)