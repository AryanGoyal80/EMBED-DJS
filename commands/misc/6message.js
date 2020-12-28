const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    commands: ['B'],
    minArgs: 0,
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments, text) => {

             await  client.users.fetch('763285109280604180').then(user => {
                 user.send(``)
               } )
             
            },
            permissions: ['ADMINISTRATOR'],
           
        }

        client.login(process.env.DJS_TOKEN)