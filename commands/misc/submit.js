module.exports = {
    commands: ['submit', 's'],
    minArgs: 1,
    permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'] , 
    callback: async (message, arguments, text) => {
    
const { member, mentions } = message
const tag = `<@${member.id}>`
var person = message.guild.member(message.mentions.users.first());
const temprole = message.guild.roles.cache.find(role => role.name === "temp")

const discussionchannel = message.client.channels.cache.get('788131164941582338');

await discussionchannel.send(`${arguments[0]} your response has been submitted 🥳🥳. Thank you ${tag} for approving. :smile: `)
       person.roles.remove(temprole.id)
}

}
