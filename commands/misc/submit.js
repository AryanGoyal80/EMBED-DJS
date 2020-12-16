module.exports = {
    commands: ['submit', 's'],
    minArgs: 1,
    permissions: 'MANAGE_MESSAGES',
    callback: async (message, arguments, text) => {
    
const { member, mentions } = message
const tag = `<@${member.id}>`

const discussionchannel = message.client.channels.cache.get('788131164941582338');

await discussionchannel.send(`${arguments[1]} your response has been submitted 🥳🥳. Thank you ${tag} for approving. :smile: `)
}
}
