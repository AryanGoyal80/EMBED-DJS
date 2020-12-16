const Discord = require('discord.js');

module.exports = {
  commands: ['suggest', 'suggestion', 'poll'],
  minArgs: 1,
  expectedArgs: '<!poll text>',

  callback: async (message, arguments, text) => {
    const pollchannel = message.client.channels.cache.get('788664173713817641');
    
      let suggestembed = new Discord.MessageEmbed()
        .setColor('#337f4e')
        .setTimestamp()
        .addFields(
          { name: `Suggestion:`, value: `${text}` })
      
      //send embed and react to it with up/down
      let reactsuggest = await pollchannel.send(suggestembed);
      reactsuggest.react('👍')
      reactsuggest.react('👎')
      
      await pollchannel.send(suggestembed);     

      message.delete()
    
    }


}
