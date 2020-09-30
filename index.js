const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'sup bot') {
        message.reply('sup human');
    }
});

bot.login('NzU2NDYxNTg0NjIwMDYwNzIz.X2SLwA.MGFPL49TuLK_hjVOJHnbjRgDavs');