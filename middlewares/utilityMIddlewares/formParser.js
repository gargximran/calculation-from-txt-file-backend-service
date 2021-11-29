const formidable = require('formidable')

const formParser = (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
        }else{
            req.files = files;
            req.body = fields;
            next()
        }
    });
}


module.exports = formParser