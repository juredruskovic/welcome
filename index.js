const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", async () => {
  console.log(`Bot is has been deployed 🚀`)
  client.user
    .setActivity(`Discord Tricks`, { type: "WATCHING" }) //status code
    .catch(error => console.log(error))
})

const canvacord = require("canvacord")

client.on("guildMemberAdd", async member => {
  if (member.guild.id !== "919588645319634995") return;
  const welcomeCard = new canvacord.Welcomer()
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setAvatar(member.user.displayAvatarURL({ format: "png" }))
    .setColor("title", "#FEFCFC") //white
    .setColor("username-box", "#FEFCFC") //white
    .setColor("discriminator-box", "#FEFCFC") //white
    .setColor("message-box", "#FEFCFC") //white
    .setColor("border", "#000000") //black
    .setColor("avatar", "#FEFCFC") //white
    .setBackground("https://discord.com/channels/919588645319634995/919597363151126559/919613719468716093") //should be png format
    .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
  member.guild.channels.cache.get("919588645319634995").send(member.user.toString(), attachment)
})


client.login(process.env.token)