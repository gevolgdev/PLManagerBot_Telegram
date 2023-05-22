require('dotenv').config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    'Como posso ajudar?',
    {
      reply_markup: {
        k4eyboard: [
          ['Fazer corre'],
          ['Fumar um'],
          ['Dar um rolê'],
        ],
        resize_keyboard: true
      }
    }
  );
});

bot.launch();
