const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!args[0]) return message.channel.send(`Geef een geldig USERID op.`);

  let user = bot.users.get(args[0]);

  if (user) {

    if (!message.channel.name.startsWith(`ticket`)) return message.channel.send(`Dit command in een ticket gebruike SVP.`);

    await message.channel.overwritePermissions(user, {
      "READ_MESSAGES": true,
      "SEND_MESSAGES": true,
      "ATTACH_FILES": true,
      "CONNECT": true,
      "CREATE_INSTANT_INVITE": true,
      "ADD_REACTIONS": false
  });

    var succesEmbed = new discord.RichEmbed()
    .setColor("#fabb3e")
     .setThumbnail(message.guild.iconURL)
     .setTitle (`:white_check_mark: Bezoeker toegevoegd!`)
     .addField (`Bezoeker toegevoegd:`, user.username)
     .setFooter("© WalibiMC - 2020/2021")
     .setTimestamp();

    message.channel.send(succesEmbed)
  };
}

module.exports.help = {
  name: "add"
}