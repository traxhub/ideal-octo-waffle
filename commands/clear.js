const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: **We hebben gezocht naar de permissie MANAGE_MESSAGES maar die heb jij niet.**");
  if(!args[0]) return message.channel.send(":x: **geef een aantal op .**");
  message.channel.bulkDelete(args[0]).then(() => {
      
  message.channel.send(`:pencil2: ${args[0]} berichten verwijderd.`); 
});

message.delete();

}

module.exports.help = {
  name: "clear"
}
