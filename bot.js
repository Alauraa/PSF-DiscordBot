const fs = require('fs'),
      request = require('request'),
      Discord = require('discord.js'),
      cheerio = require('cheerio'),
      moment = require('moment');

const bot = new Discord.Client();


var mins = 5,
the_interval = mins * 60 * 1000;
setInterval(function() {


const channel = bot.channels.get("ChannelID");

const time = moment().format('LT');

request('http://play.psforever.net/status.htm', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('body div.playercount').each(function(i, element){
            var el = $(this);
            var pc = el.text();
            channel.send("PSForever Test Server -- Current Player Count: **"+pc+"**");
    });
  }
});


console.log("Message sent!")


}, the_interval);



bot.login("BotID");
