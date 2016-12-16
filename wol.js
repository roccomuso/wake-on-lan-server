var wol = require('node-wol');

module.exports = function(cb){
  wol.wake('f8:32:e4:a2:5f:7b', function(error) {
    if (error) {
      // handle error
      if (cb) cb(error); else console.log(error);
    } else {
      // done sending packets
      if (cb) cb(null, 'packet sent'); else console.log('packet sent');
    }
  });
};
