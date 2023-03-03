// Require the necessary discord.js classes
const { Client, Intents, GuildManager } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
    //new Collection.Collection(entries);

});

async function statuscheck() {
    const statusArray = {};
    var first = 0;
    var second = 0;
    //new client.guilds.Collection();
    await Array.from(client.guilds).forEach( async guilds => {
      first++;
        const status = [];
        await Array.from(guilds.members).forEach(async m => {
            status.push(m.memebers.presence.status);
            console.log("hi");
            second++;
        });
        statusArray[g.id] = status;
    });
    console.log('set ' + first + ' ' + second); // /So I know the timer works
    return statusArray;
}

async function statuscheck() { 
    await Array.from(client.guilds.members).forEach()
}

client.isReady( 'ready', () => {

    statuscheck();
    console.log(statusArray[1]);

    //var limit = statusArray.length


})
// Login to Discord with your client's token
client.login(token);