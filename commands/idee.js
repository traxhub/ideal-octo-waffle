const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    var idee = args.join(" ");

    let errorEmbed = new Discord.RichEmbed()
    .setDescription(":rotating_light: **Je hebt geen idee meegegeven!**")
    .setColor("#fabb3e")

    if (!idee) return message.channel.send(errorEmbed); 


    var eindeEmbed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription("je hebt succesvol een suggestie is onze discord geplaats.")
    .setColor("#fabb3e")     
    .addField("Suggestie: ", idee)
    .setFooter("© WalibiMC - 2020/2021")
    .setTimestamp();

message.author.send(eindeEmbed);
 
    var ideeEmbed = new Discord.RichEmbed()
       .setAuthor(message.guild.name, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setColor("#fabb3e")     
        .addField("Suggestie: ", idee)
        .addField("Ingezonden door: ", message.author)
        .setFooter("© WalibiMC - 2020/2021")
        .setTimestamp();
 
    var ideeChannel = message.guild.channels.find(`name`, "『🔑』sugggesties");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");
 
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('✅');
        embedMessage.react('❌');

        var embed = new Discord.RichEmbed()
        .setDescription(`**Je hebt succesvol een idee verstuurd :tada:**`)
        .setColor("#fabb3e")     

        message.channel.send(embed);


    });
 
}
 
module.exports.help = {
    name: "idee"
}