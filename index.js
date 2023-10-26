const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");


const io = new Server(server, {
    cors: {
        origin:"*",
        methods:["GET", "POST"]
    }
})
app.use('/', express.static(__dirname + '/'));

    app.get('/', (req, res)=>{
         res.sendFile(__dirname+'/index.html');
    });
    io.on('connection', (socket)=>{
        console.log('Un client est connecte');
        //socket.on('message', (msg)=>{
        //    io.emit('message', msg);
        //});
    socket.on('disconnect', ()=>{
        console.log('Le client c`est deconnecte');
    });
});
server.listen(3000, ()=>{
console.log('Server en ecoute sur le port 3000');
});







