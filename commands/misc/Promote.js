module.exports = {
    commands: ['temp'],
    minArgs: 1,
    permissions: 'MANAGE_ROLES',
    callback: async (message, arguments, text) => {
    
const { member, mentions } = message
const tag = `<@${member.id}>`
var roletaking = message.guild.member(message.mentions.users.first());
const temprole = message.guild.roles.cache.find(role => role.name === "temp")

const modchannel = message.client.channels.cache.get('788449162919936000');

await modchannel.send(`${arguments[0]} has been alloted temp role 🥳🥳 by ${tag} .  `)
       roletaking.roles.add(temprole.id)
}

}
