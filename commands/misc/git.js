module.exports = {
    commands: ['git', 'github'],
    minArgs: 0,
    callback: async (message, arguments, text) => {
        // here are all the link regarding bot and everything else
        await message.channel.send(`Here is link to my code: \n https://github.com/AryanGoyal80/EMBED-DJS `)
    }
}
