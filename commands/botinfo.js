const Discord = require("discord.js");
const moment = require("moment")
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
var pjson = require('../package-lock.json');

exports.run = (client, message, args) => {

let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
  }
});

function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " dag" : " dagen") + " geleden";
};

let versie = process.version;
let servers = client.guilds.size;
let gebruikers = client.users.size;
let aangemaaktOp = `${client.user.createdAt.toGMTString().substr(0, 16)} (${checkDays(client.user.createdAt)})`;
let memory = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MBS`;
let kanalen = client.channels.size;
let library = "Discord.JS V" + Discord.version;
let botVersie = "v0.1"

let botinfoEmbed = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.setColor("#fabb3e")     
.setThumbnail(message.guild.iconURL)
.addField("NodeJS versie:", versie, true)
.addField("Memory gebruik:", memory, true)
.addField("Library", library, true)
.addField("Servers:", servers, true)
.addField("Totale gebruikers:", gebruikers, true)
.addField("Totale kanalen:", kanalen, true)
.addField("Bot aangemaakt op:", aangemaaktOp, true)
.addField("Bot versie:", botVersie, true)
.setFooter("© WalibiMC - 2020/2021")
.setTimestamp()

message.channel.send(botinfoEmbed);

}

module.exports.help = {

    name: "botinfo",
  }