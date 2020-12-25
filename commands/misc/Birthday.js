module.exports =  {
    commands: ['birthday', 'bday'],
    minArgs: 1,
    expectedArgs: '<wishing>',  

    callback: async (message, arguments, text) => {

        const Discord = require('discord.js');

        const Wishingschannel = message.client.channels.cache.get(`${arguments[1]}`);


 const mention = message.author




  
      //create an embed with the arguments provided
     let BdayEmbed = new Discord.MessageEmbed()
          .setColor('#ca208b')
          .setTitle(`${message.author.username} sent a wishing message. :partying_face: `)
          .setFooter(`Wishing sent by:  ${message.author.username} `)
          .addFields(
              { name: '\u200B', value: 'Message:' },
              { name:  `**Here is your wishing message** ` , value: `${text}` },       
                    )
           
              await Wishingschannel.send(BdayEmbed); 

              const person = message.author 
                 person.send("Your birthday message has been send!")
          
          } 
        }