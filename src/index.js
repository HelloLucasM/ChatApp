const path = require('path'); 
const express = require('express');
const http = require('http'); 
const socketio = require('socket.io');

const app = express(); 
const server = http.createServer(app); 
const io = socketio(server);

const port = process.env.PORT || 3000; 
const publicDirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicDirectoryPath));

let count = 0; 

io.on('connection', (socket) =>{
    console.log("New Connection available." ); 
    socket.emit('counterUpdated', count); 

    socket.on('increment', ()=>{
        count++; 
        io.emit('counterUpdated', count)
    })
})

server.listen(port, ()=>{
    console.log(`Server is up on port ${port}.`)
})
