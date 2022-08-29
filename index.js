const { Client } = require('discord.js');
const bot = new Client;
const token = "MTAxMzM0NzgyMjU0NTkyODE5Mg.GX4NGD.n0R_YebWOK9SLFjCJwSTV2KInpchJOb5BGuSuw"; // TOKEN BOT KAMU
var PREFIX = "!"; // PREFIX BOT KAMU

bot.on('ready', () => {
    console.log('Bot Sudah Online')

    bot.user.setActivity("BLUE SKY ROLEPLAY", { 
        type: "PLAYING"
    }).catch(console.error);
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    if(!message.content.startsWith(PREFIX)) return;
    switch (args[0]) {

    case 'register':

            if(message.channel.type == "dm") return message.channel.send("Kamu tidak bisa registrasi dari DM")
                const shifter = args.shift()
            if(!args.length) return message.channel.send("Mohon berikan nama untuk di set")
                const nick = "[WARGA]" + args.join(" ")
            if(nick.length > 32) return message.channel.send("Nickname terlalu panjang, mohon berikan yang lebih singkat")
            try {
                    message.member.roles.add("") //Role Yang Mau DiSet
                    message.member.setNickname(nick)
                    return message.reply("Accep Selamat Akun Anda Sudah Di Acc");
                } catch(e) {
                    return message.channel.send("Ada sebuah kesalahan disaat melaksanakan command.")
                            }
            break;
    }
})

bot.login(token);
