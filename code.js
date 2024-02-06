// Initialize dotenv
require('dotenv').config(); 

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, ], });

// Log in with the client token set in .env
client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`); 
});
client.login(process.env.CLIENT_TOKEN);

// Execution: Reply with a 'Hello' with the username to anyone who types 'Hello' in the chat.
client.on('messageCreate', msg => {
  if (msg.content === 'Hello') {
    msg.reply(`Hello ${msg.author.username}`);
  }
});
