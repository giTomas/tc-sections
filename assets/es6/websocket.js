if(window.WebSocket){
    console.log('websocket');
} else {
    console.log('not');
}

const socket = new WebSocket('ws://localhost:3000');
socket.send('Some message');
socket.close();
