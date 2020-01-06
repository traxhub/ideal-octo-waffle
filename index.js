const botconfig = require("./botconfig.json");;
const Discord = require("discord.js");
const fs = require("fs");
const active = new Map();
const readline = require('readline');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log(" » ik kan geen (commands).js file vinden in de commands folder ");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} Geladen!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {

  console.log("Ik start me zelf op.");

  bot.user.setActivity("play.mcwalibi.nl", {type: "PLAYING"});
  bot.user.setStatus('dnd');
});

bot.on('guildMemberAdd', member => {

    var role = member.guild.roles.get('663494916344905729'); 
    member.addRole(role);

  const channel = member.guild.channels.find("name", "『👋🏻』welkom");

  let joinMessage = new Discord.RichEmbed()
  .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
  .setDescription(`**Welkom ${member.user.tag} op de WalibiMC discordserver.**`)
  .setColor("#fabb3e")
  .setFooter("© WalibiMC - 2020/2021")


  channel.send(joinMessage);

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  if (!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  var options = {
    active: active
  
  }

  let commands = bot.commands.get(cmd.slice(prefix.length));
  if(commands) commands.run(bot,message,args,options);

});

bot.login(proces.env.token);