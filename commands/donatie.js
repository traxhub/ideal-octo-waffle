const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let donatieEmbed = new discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor("#fabb3e")
    .addField("Payal Link:", "[paypal.me/DonateBart](https://paypal.me/DonateBart)")
    .addField("Ideal linkje", "[Bunq.me/DonateBart](https://bunq.me/DonateBart)")
    .addField("Paysafecard donatie", "Maak een ticket aan.")
    .setFooter("© WalibiMC - 2020/2021")
    .setTimestamp()

    message.channel.send(donatieEmbed);

    let desEmbed = new discord.RichEmbed()
    .setDescription(":rotating_light: **Als je minimaal 1 euro donneert krijg je een donateur role + toegang tot donateur channels!**")
    .setColor("#fabb3e")


    message.channel.send(desEmbed);

}

module.exports.help = {
    name: "donatie"
}