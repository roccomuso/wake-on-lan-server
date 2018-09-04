var connect = require('connect')
var http = require('http')
const argv = require('./lib/argv-handler.js')
const wakeUp = require('./lib/wol.js')

var app = connect()

app.use('/wakeup', (req, res) => {
  wakeUp(argv.mac, function(err, out){ // send WOL packet.
    console.log(err ? err : out)
    return res.end(err ? err : out)
  })
})

http.createServer(app).listen(Number(argv.port));
console.log(`Listening on ${argv.port}`)
