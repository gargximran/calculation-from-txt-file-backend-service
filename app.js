const http = require('http')
const express = require('express')
const app = express()
const {init} = require('./socket/socket')
const connectMongoDB = require('./db/connection')
const registerRoutersToApp = require('./router')
const formParser = require('./middlewares/utilityMIddlewares/formParser')
const path = require('path')
const cors = require('cors')

// setting up env file from other directory
require('dotenv').config({
    path: './envFiles/' + (process.env.NODE_ENV || 'development') + '.env'
})
const PORT = process.env.PORT;

app.use(cors())

// init static file server
app.use(express.static('public'))

// add formParser
app.use(formParser)


// register all router to app
registerRoutersToApp(app);


global.appRoot = path.resolve(__dirname);










const server = http.createServer(app)
const io = init(server)

global.socket = io


server.listen(PORT, () => {
    connectMongoDB()
        .then(() => console.log('DATABASE CONNECTED!'))
        .catch(err => console.log(err))
})


// if (!sticky.listen(server, PORT)) {
//     for(let i = 0; i < os.cpus().length; i++){
//         cluster.fork()
//     }
// } else {
//     console.log('app is running on pid ' + process.pid + ' and port ' + PORT)
// }

