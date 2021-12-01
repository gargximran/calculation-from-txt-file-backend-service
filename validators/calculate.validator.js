 const fs = require('fs')
 const math = require('mathjs')

const calculateValidator = (req, res, next) => {

    const errors = {}

    // title validator
    if('title' in req.body){
        if(req.body.title.length < 3 || req.body.title.length > 15){
            errors.title = 'Title length can be 3 to 15 character long!'
        }
    }else{
        errors.title = 'Title field is required!'
    }

    // textFile validator
    if('textFile' in req.files){
        // checking the file type # only text allow
        if(req.files.textFile.mimetype === 'text/plain'){
            // read the file first
            let x = fs.readFileSync(req.files.textFile.filepath, 'utf-8')
            // if file is empty
            if(x.split('\n').every(value => value === '')){
                errors.textFile = 'Text file cannot be empty!'
            }else{
                try{
                    eval(x.split('\n')[0])
                }catch (e) {
                    errors.textFile = 'Math syntax in text file is incorrect!'
                }
            }
        }else{
            errors.textFile = 'Only file with .txt extension allow!'
        }


    }else{
        errors.textFile = 'Text file is required!'
    }


    if(Object.keys(errors).length){
        return res.status(422).send({
            message: 'Incorrect data detected!',
            errors: errors,
            status_code: 422
        })
    }else{
        next()
    }
}

module.exports = calculateValidator