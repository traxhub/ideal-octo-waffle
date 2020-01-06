const discord = require("discord.js");

module.exports.run = (bot, messages, args) => {

    let embed = new discord.RichEmbed()
    .setDescription(":rotating_light: **Klik [hier](https://store.mcwalibi.nl/) om naar onze store tegaan!**")
    .setColor("#fabb3e")

    messages.channel.send(embed);
}

module.exports.help = {
    name: "store"
}