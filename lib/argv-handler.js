var argv = require('yargs')
  .usage('Usage: node index.js -m MAC_ADDRESS -p [serverPort]')
  .help('help')
  .alias('help', 'h')
  .option('mac', {
        alias: 'm',
        demand: true,
        describe: 'Mac Address for the WOL packet.',
        type: 'string'
    })
  .option('port', {
        alias: 'p',
        demand: false,
        describe: 'Server Port.',
        type: 'number'
    })
  .default('port', 8002)
  .example('node index.js -m MAC_ADDRESS -p PORT', 'Start the server on the given PORT')
  .example('node index.js -m MAC_ADDRESS', 'Start the server on the default 8002 port')
  .epilogue('@Author: Rocco Musolino - github.com/roccomuso/wake-on-lan-server - @Copyright 2017')
  .argv;

//console.log(argv);

module.exports = argv;
