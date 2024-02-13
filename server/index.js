const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (req, res) => res.send('Server running perfectly!'));

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        console.log("new user joined")
    })
    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message })
    })
    socket.on('disconnect', message => {
        console.log("disconnected")
    })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});