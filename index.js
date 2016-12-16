const wakeUp = require('./wol.js');
const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8002
});

// Add the route
server.route({
    method: 'GET',
    path:'/wakeup', 
    handler: function (request, reply) {
        wakeUp(function(err, out){ // send WOL packet.
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
