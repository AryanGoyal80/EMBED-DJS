module.exports = {
    commands: ['promote'],
    minArgs: 1,
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments, text) => {
    
const { member, mentions } = message
const tag = `<@${member.id}>`
var roletaking = message.guild.member(message.mentions.users.first());
const modrole = message.guild.roles.cache.find(role => role.name === "Mod")

const modchannel = message.client.channels.cache.get('788449162919936000');

await modchannel.send(`${arguments[0]} has been alloted mod role :smirk: 🥳🥳 by ${tag} .  `)
       roletaking.roles.add(modrole.id)
}

}
