const axios = require('axios');
const { Telegraf } = require('telegraf');

const bot = new Telegraf("7162783390:AAHwdR7ZQ9mW--pY8NZqrM6r17ZG5ivFK-Q");

// Commands and their responses
const commands = {
    panjab: 'Chandigarh',
    Gujrat: 'Gandhinagar',
    Utrakhand: 'Dehradun',
    udisha: 'Bhubaneswar',
    Uttarpradesh: 'Lucknow',
    hariyana: 'Chandigarh',
    'Himachal Pradesh': 'Shimla',
    Rajisthan: 'Jaipur',
    westbangal: 'Kolkata',
    Chhatisagarh: 'Raipur',
    Madhypradesh: 'Bhopal',
    Jdharkhand: 'Ranchi',
    Andhrapradesh: 'Hyderabad',
    Telgana: 'Hyderabad',
    Kerala: 'Thiruvananthapuram',
    Tamilnadu: 'Chennai',
    Asam: 'Dispur',
    Goa: 'Panaji',
    'Arunachal Pradesh': 'Itanagar',
    Maharastra: 'Mumbai',
    Tripura: 'Agartala',
    Mizoram: 'Aizawl',
    Meghalya: 'Shillong',
    Manipur: 'Imphal',
    Nagaland: 'Kohima',
};

bot.start((ctx) => ctx.reply('Welcome to my telegram bot'));

// Register commands dynamically
Object.keys(commands).forEach(command => {
    bot.command(command, (ctx) => ctx.reply(commands[command]));
});


// Command to get all capitals
bot.command('allcapitals', (ctx) => {
    const allCapitals = Object.entries(commands).map(([state, capital]) => `${state}: ${capital}`).join('\n');
    ctx.reply(allCapitals);
});

// Custom command for fetching external data
// bot.command('dom', async (ctx) => {
//     try {
//         const response = await axios.get('https://raw.githubusercontent.com/Ankush2107/Data-Structure-And-Algorithm/main/Arrays/arrayManipulation.js');
//         console.log(response.data);
//         ctx.reply(response.data);
//     } catch (error) {
//         console.error(error);
//         ctx.reply('Failed to fetch data.');
//     }
// });

bot.launch();
