const mongoose = require('mongoose')


const calculationResultSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 3,
        max: 15
    },
    result: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})


const calculationResultModel = mongoose.model('calculationResults', calculationResultSchema)
module.exports = calculationResultModel
