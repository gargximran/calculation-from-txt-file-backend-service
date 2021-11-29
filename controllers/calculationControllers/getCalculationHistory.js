const calculationResultModel = require('../../db/model/calculationResultModel')

const getCalculationHistory = async (req, res) => {
    const {skip} = req.query;
    try{
        const result = await calculationResultModel.find({}).sort([['updatedAt', -1]]).skip(parseInt(skip)).limit(10).exec()

        const totalCount = await calculationResultModel.countDocuments().exec()
        res.send({
            count: totalCount,
            result: result
        })
    }catch (e) {
        res.status(400).send()
    }

}

module.exports = getCalculationHistory