'use strict';

if (window.WebSocket) {
    console.log('websocket');
} else {
    console.log('not');
}

var socket = new WebSocket('ws://localhost:3000');
socket.send('Some message');
socket.close();