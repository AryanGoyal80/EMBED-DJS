module.exports =  {
    commands: ['birthday', 'bday'],
    minArgs: 1,
    maxArgs: 3,
    expectedArgs: '<wishing>',  

    callback: async (message, arguments, text) => {

        const Discord = require('discord.js');

        const Wishingschannel = message.client.channels.cache.get('787417148191670303');


       

 const GuildID = "766514180672323625"

 const mention = message.author
 const UserID = mention.id




  
      //create an embed with the arguments provided
     let BdayEmbed = new Discord.MessageEmbed()
          .setColor('#ca208b')
          .setTitle(`${message.author.username} sent a wishing message. :partying_face: `)
          .setFooter(`Wishing sent by:  ${message.author.username} `)
          .addFields(
              { name: '\u200B', value: 'Message:' },
              { name: `${text} `, value: '\u200B' },       
                    )
           
              await Wishingschannel.send(BdayEmbed); 
          
          } 
        }