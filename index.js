const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '832456131:AAEdfNCmQeu5InaPZzTOGXShISJooDsnxmA'

const bot = new TelegramBot(TOKEN, {polling: true})

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием.)
bot.onText(echo ('Hello!'), function (msg, match) {
var fromId = msg.from.id;
var resp = match[1];
bot.sendMessage(fromId, resp);
});

// Простая команда без параметров.
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    // Фотография может быть: путь к файлу, поток(stream) или параметр file_id
    var photo = 'cats.png';
    bot.sendPhoto(chatId, photo, {caption: 'Милые котята'});
});
