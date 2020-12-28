const Discord = require('discord.js')


module.exports = {
    commands: ['B'],
    minArgs: 0,
    permissions: 'ADMINISTRATOR',
    callback: (message, arguments, text) => {

        
      
             Client.users.cache.get('763285109280604180').send(`**From Aya-** \n Robin/Lars/rap aspirant/Dutch dad, many hats and names and one "pure" soul yet so many talents!
             Thank you for everything you do for us on the server, what a home you guys have built!
             I wish you a very happy birthday, to make it through one more year as gracefully as you can :sparkles:
             - Mama Aya `)
               
             
            },
            permissions: ['ADMINISTRATOR'],
           
        }

        client.login(process.env.DJS_TOKEN)