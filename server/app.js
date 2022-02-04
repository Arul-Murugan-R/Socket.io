const express = require('express')
const app = express()
// const server = require('http').createServer(app);
const server = app.listen(3080)
const io = require('socket.io')(server,{
    cors:{
        origin:"*",
    }
})


io.on('connection', (socket)=>{
    // console.log('Connected to Client')
    console.log(socket.id)

    socket.on('message',(msg)=>{
        socket.broadcast.emit('send-message',msg)
        // console.log(msg)
    })
    socket.on('image',(image)=>{
        socket.broadcast.emit('send-image',image)
    })
})


// server.listen(3000,()=>{
//     console.log('Server http://localhost:3000/')
// })