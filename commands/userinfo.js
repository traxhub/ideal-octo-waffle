const Discord = require("discord.js");
const moment = require("moment")

exports.run = (client, message, args) => {

function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " dag" : " dagen") + " geleden";
};

const status = {
  online: "Online",
  idle: "Afwezig",
  dnd: "Niet storen",
  offline: "Offline/ontzichtbaar"
};

const user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

if (!user) {
  user = message.author
};

let errorEmbed = new Discord.RichEmbed()
.setDescription(":rotating_light: **Deze gebruiker bestaat niet**")
.setColor("#fabb3e")

if (!user) {
  message.reply(errorEmbed)
}

const gebruiker = `${user.user.username}#${user.user.discriminator}`
const id = message.author.id;

const userStatus = `${status[user.user.presence.status]}`
const nickname = `${user.nickname !== null ? `${user.nickname}` : "Geen nickname"}`
const speelStatus = `${user.user.presence.game ? `${user.user.presence.game.name}` : "Speelt niets"}`
const accountGemaakt = `${user.user.createdAt.toGMTString().substr(0, 16)} (${checkDays(user.user.createdAt)})`
const accountJoined = `${user.joinedAt.toGMTString().substr(0, 16)} (${checkDays(user.joinedAt)})`
const roles = `${user.roles.filter(r => r.id !== message.guild.id).map(roles => "<@&" + roles.id + ">").join(", ") || "Geen rollen"}`


let embed = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.setThumbnail(user.user.displayAvatarURL)
.setColor("#fabb3e")     
.addField("Naam:", gebruiker, true)
.addField("Userid:", id, true)
.addField("Nickname", nickname, true)
.addField("Status:", userStatus, true)
.addField("Speelt:", speelStatus, true)
.addField("Account aangemaakt:", accountGemaakt, true)
.addField("Account gejoind:", accountJoined, true)
.addField("Rollen:", roles, true)
.setFooter("© WalibiMC - 2020/2021")
.setTimestamp()

message.channel.send(embed);

}

module.exports.help = {

    name: "userinfo",
  }