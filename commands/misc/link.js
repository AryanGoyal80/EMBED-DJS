module.exports = {
    commands: ['link'],
    minArgs: 1,
    callback: async (message, arguments, text) => {
        // here are all the link regarding bot and everything else
        message.channel.send(`Here are all the links: \n\n https://discord.gg/rMsJHGEvDu \n\n  https://drive.google.com/folderview?id=1sBKdnUfx_UFFe1l7mL0CA-cgLgRlEwy3`)
    }
}
