## Wake on LAN basic server

### Basic usage

    $ node index.js -m MAC_ADDRESS -p PORT

Then call the <code>GET /wakeup</code> entrypoint to send the WOL broadcast packet over the LAN.

### File description

<code>index.js</code>: Just a basic sample to demonstrate WOL feature in Node.js.

<code>utils/wol-udp-server.js</code>: UDP Server to debug and check for the arrival of the wol packets.

### Author

Rocco Musolino

