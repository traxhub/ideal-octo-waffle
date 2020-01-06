const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setDescription(":mailbox_with_mail: **Bekijk je priveberichten!**")
    .setColor("#fabb3e")

    message.channel.send(embed);

    let embed2 = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Commands", "!add\n!botinfo\n!donatie\n!idee\n!ip\n!serverinfo\n!store\n!ticket\n!userinfo\n!website")
    .setColor("#fabb3e")
    .setFooter("© WalibiMC - 2020/2021")
    .setTimestamp()

    message.author.send(embed2);
    
}

module.exports.help = {
    name: "help"
}