const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    commands: ['B'],
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
              { name: `**From Aya-** \n Robin/Lars/rap aspirant/Dutch dad, many hats and names and one "pure" soul yet so many talents!
              Thank you for everything you do for us on the server, what a home you guys have built!
              I wish you a very happy birthday, to make it through one more year as gracefully as you can :sparkles:
              - Mama Aya ` },
              )
             
             await  client.users.get("763285109280604180").send(BdayEmbed)
               
             
            },
            permissions: ['ADMINISTRATOR'],
           
        }

        client.login(process.env.DJS_TOKEN)