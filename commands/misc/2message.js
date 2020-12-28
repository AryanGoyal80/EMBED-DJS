const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    commands: ['lars'],
    minArgs: 0,
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments, text) => {
        
        let BdayEmbed = new Discord.MessageEmbed()
          .setColor('#ca208b')
          .setTitle(`**Here are the wishings from the whole sv team** :partying_face:`)
          .setFooter(`Page 1`)
          .addFields(
              { name: '\u200B', value: 'Message:' },
              { name: `\n\n **From abhi.kr.2100-**  \n Here is your wishing message
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
               - Thomas Shelby :wink: xd` },
              )
              client.users.fetch('763285109280604180').then(user => {
                user.send(BdayEmbed)
              } )
            
            },
            permissions: ['ADMINISTRATOR'],
            requiredRoles: []
        }

        client.login(process.env.DJS_TOKEN)