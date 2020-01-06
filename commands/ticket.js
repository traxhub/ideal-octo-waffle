const discord = require('discord.js'); 
exports.run = (client, message, args, guild) => { 

  let onderwerp = args.join(" ");

      var userName = message.author.username;

  let bicon = client.user.displayAvatarURL;
  errorEmbed = new discord.RichEmbed()

  .setColor("#fabb3e") 
  .setAuthor("Error", bicon)
  .setDescription("Geef een geldige reden op!")

  if(!onderwerp) return message.channel.send(errorEmbed); 

  let role = message.guild.roles.find(c => c.name ==='🛠 • Stafflid'); 
  let role2 = message.guild.roles.find(c => c.name ==='@everyone'); 
        var bool = false;

        message.guild.channels.forEach((channel) => {

          if (channel.name == "?ticket-" + userName.toLowerCase()) {

            let dongembed = new discord.RichEmbed()
            .setColor("#fabb3e") 
            .setAuthor("Error", bicon)
            .setDescription(":x: je hebt nog een ticket open staan!")
            message.channel.send(dongembed);

              bool = true;

          }

      });

      if (bool == true) return;

      if (!role) return message.channel.send("Maak aub een role genaamt `staff` voordat je een ticket aanmaakt. ")
  message.guild.createChannel("?ticket-" + userName, "text").then(c => {
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      let bicon = client.user.displayAvatarURL; 
      const ticketEmbed = new discord.RichEmbed()
      .setAuthor("ticket!", bicon)
      .addField("Ticket author", `**${message.author}**`, true)
      .addField("reden", `**${onderwerp}**`)
      .setThumbnail(`${message.author.avatarURL}`)
      .setColor("#fabb3e") 
      .setDescription("bedankt voor het maken van een ticket je wordt zo snel mogelijk geholpen!", true)
      .setTimestamp()
      .setFooter(`Ticket gemaakt op:`, bicon);
      c.send({ embed: ticketEmbed });

      c.setTopic(`Ticket author ${message.author}`) 

      const categoryId = "663653528253890591"; 
      c.setParent(categoryId) 

      geluktEmbed = new discord.RichEmbed()

      .setAuthor("Je ticket is gemaakt!", bicon)
      .setColor("#fabb3e") 
     .setAuthor("klaar", bicon)
      .setDescription(`je ticket is succesvol gemaakt zie ${c}`)

      message.channel.send(geluktEmbed);
      c.send("@everyone") .then(message => message.delete(100)); 
      return;
  }).catch(console.error);

}
exports.help = { 
    name: 'ticket' 
  };