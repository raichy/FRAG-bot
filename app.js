// Izsaucam paketes
const Discord = require('discord.js');
const bot = new Discord.Client();
//const config = require("./config.json");
const prefix = '!';

// Listener Event: On Bot launched
bot.on('ready', () => {
    console.log('Bot Launched...')
});


// Listener Event: vienmēr nostrādās, kad tiks saņemts ziņojums
bot.on('message', (message) =>{

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Mainīgie
    const args = message.content.slice(prefix.length).trim().split(/ +/g); // Nogrieām prefiksu, sadalam rindu vadoties pēc tukšumiem
    const command = args.shift().toLowerCase();

    // Komanda RAND  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    if(command === 'rand'){
        var rnd = 0;
        if(args[0] != null){
            rnd = Math.floor(Math.random()*args[0])+1
            message.channel.send('Nejaušs skaitlis intervālā ('+args[0] +'): => ' + rnd)
        }else{
            rnd = Math.floor(Math.random()*100)+1
            message.channel.send('Nejaušs skaitlis intervālā (100): => ' + rnd)
        }
    }else

    // Komanda hmm  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    if(command === 'hmm'){
        if(args[0] == null){
            message.channel.send('Kāds bija jautājums?')
            return
        }
        var answer = Math.random() >= 0.5
        if(answer)
          message.channel.send('Jā!')
        else
          message.channel.send('Nē!')
    }else

    // Komanda help  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    if(command === 'help'){
        message.channel.send('Pieejamās komandas:')
        message.channel.send('==================')
        message.channel.send('**!rand**   ... nejaušs skaitlis no 0 - 100' )
        message.channel.send('**!rand [intervāls]**   ... nejaušs skaitlis no 0 - [intervāls]')
        message.channel.send('**!hmm [jautājums]**   ... atbilde uz [jautājumu]')
    }

    else{
        // Komanda nepareiza
        message.channel.send('Nepareiza komanda!')
    }

});


// Login
bot.login(process.env.BOT_TOKEN);
