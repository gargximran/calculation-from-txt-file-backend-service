const fs = require('fs')
const calculationResultModel = require('../../db/model/calculationResultModel')

const postCalculate = async (req, res) => {
    try {
        const {textFile} = req.files;

        // new name for saving file
        const fileNameToSave = '/textfilesforcalculate/' + new Date().toISOString() + textFile.originalFilename;

        // read file data from inside file
        const fileData = fs.readFileSync(textFile.filepath, 'utf-8');

        // calculate result
        const mathResult = eval(fileData.split('\n')[0])

        // store file to public path
        fs.copyFileSync(textFile.filepath, appRoot + '/public' + fileNameToSave)

        // save data to mongoDB
        const result = await calculationResultModel.create({
            title: req.body.title,
            result: mathResult,
            filePath: fileNameToSave,
        })

        socket.emit('newCalculationDone', result)

        res.status(200).send({
            data: result,
            message: 'Calculation done!',
            status_code: 200
        })


    } catch (e) {
        console.log(e)
        res.status(400).send({
            message: 'Something went wrong',
            status_code: 400
        })

    }
}


module.exports = postCalculate