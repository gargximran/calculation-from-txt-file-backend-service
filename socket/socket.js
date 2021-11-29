const { Server } = require('socket.io')
let io;

module.exports = {
    init: httpServer => {
        // use the cluster adapter
        io = new Server(httpServer, {
            cors: {
                origin: process.env.FRONTEND_HOST,
                methods: ['GET', "POST"]
            }
        })
        return io
    },
    getIO: () => {
        if(!io){
            throw new Error('Socket.io not initialized!')
        }else{
            return io
        }
    }
}