var wol = require('node-wol');

module.exports = function(macAddress, cb){
  wol.wake(macAddress, function(error) {
    if (error) {
      // handle error
      if (cb) cb(error); else console.log(error);
    } else {
      // done sending packets
      if (cb) cb(null, 'packet sent'); else console.log('packet sent');
    }
  });
};
