require('dotenv').config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const options = {
  walk: 'Dar uma volta',
  prepare: 'Preparar',
  hangout: 'Vamos sair',
};

bot.start((ctx) => {
  const welcomeMsg = "Bem-vindo(a), como posso ajudar?";
  ctx.telegram.sendMessage(ctx.chat.id, welcomeMsg,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {text: `${options.walk}`, callback_data: 'walk'},
            {text: `${options.prepare}`, callback_data: 'prepare'},
            {text: `${options.hangout}`, callback_data: 'hangout'}
          ],
        ]
      }
    }
  );
  bot.action('walk', ctx => walkData(ctx));
});

const OutConfig = {};

const walkData = (ctx) => {
  ctx.reply('Deseja ir dar uma volta que horas? Digite /hours e a hora desejada.');
};

bot.command('hours', ctx => {
  const userMessage = ctx.message.text;
  let messageArr = userMessage.split(' ');
  messageArr.shift();
  let message = messageArr.join('');
  OutConfig.hours = message;
  ctx.reply('Digite /day e digite o dia.');
});

bot.command('day', ctx => {
  const userMessage = ctx.message.text;
  let messageArr = userMessage.split(' ');
  messageArr.shift();
  let message = messageArr.join('');
  OutConfig.day = message;
});

bot.command('out', ctx => {
  ctx.reply(`Dia: ${OutConfig.day} - Horas: ${OutConfig.hours}`);
});



bot.launch();