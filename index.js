const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '832456131:AAEdfNCmQeu5InaPZzTOGXShISJooDsnxmA'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, ${msg.from.first_name})

})
