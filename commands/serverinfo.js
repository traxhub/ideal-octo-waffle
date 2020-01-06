const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dag" : " dagen") + " geleden";
    };

    let verifLevels = ["Geen", "Laag", "Gemiddeld", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazilië",
        "eu-central": ":flag_eu: Centraal Europa",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Centraal",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. Oost",
        "us-south": ":flag_us: U.S. Zuid",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: West Europa",
        "vip-us-east": ":flag_us: VIP U.S. Oost",
        "london": ":flag_gb: Londen",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Rusland",
        "southafrica": ":flag_za:  Zuid Africa"
    };

const guild = {
    "name": message.guild.name,
    "id": message.guild.id,
    "owner": message.guild.owner.user.username + "#" + message.guild.owner.user.discriminator + "(" + message.guild.owner.user + ")",
    "region": region[message.guild.region],
    "members": message.guild.members.size + " | " + message.guild.members.filter(member => !member.user.bot).size + " | " + message.guild.members.filter(member => member.user.bot).size,
    "verificLevel": verifLevels[message.guild.verificationLevel],
    "kanalen": message.guild.channels.size,
    "rollen": message.guild.roles.size,
    "guildCreated": `${message.channel.guild.createdAt.toGMTString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`
};

    const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .setColor("#fabb3e") 
        .addField("Name", guild.name, true)
        .addField("ID", guild.id, true)
        .addField("Owner", guild.id, true)
        .addField("Regio", message.guild.region, true)
        .addField("Totaal | Mensen | Bots", guild.members, true)
        .addField("Verificatie level", guild.verificLevel, true)
        .addField("Kanalen", guild.kanalen, true)
        .addField("Rollen", guild.rollen, true)
        .addField("Guild aangemaakt op", guild.guildCreated, true)
        .setFooter("© WalibiMC - 2020/2021")
        .setTimestamp()

    message.channel.send({embed});
}

module.exports.help = {
  name:"serverinfo"
}