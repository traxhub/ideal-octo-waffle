const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    const categoryID = "663653528253890591";

    if (message.channel.parentID == categoryID) {
        message.channel.delete();
    } else {
        return message.channel.send("Voer dit commando uit in een ticket kanaal!");
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setDescription(":rotating_light: **U ticket is afgesloten, als u nog niet volledig bent geholpen mag u altijd een nieuwe aanmaken.**")
            
    var logChannel = message.guild.channels.find("name", "『⛔』discord-logs");
    if (!logChannel) return message.channel.send("Kanaal bestaat niet");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "close"
}