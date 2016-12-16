const wakeUp = require('./wol.js');
const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: '0.0.0.0', 
    port: process.argv[2] || 8002
});

// Add the route
server.route({
    method: 'GET',
    path:'/wakeup', 
    handler: function (request, reply) {
        wakeUp(function(err, out){ // send WOL packet.
          console.log(err ? err : out);
          return reply(err ? err : out);
        });
    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('WakeOnLAN Server running at:', server.info.uri);
});
