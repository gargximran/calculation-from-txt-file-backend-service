const mongoose = require('mongoose')


const connectMongoDB =() => mongoose.connect(process.env.DATABASE_URL_MONGODB)

module.exports = connectMongoDB