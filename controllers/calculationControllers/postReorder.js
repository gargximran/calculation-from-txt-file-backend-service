const calculationResultModel = require('../../db/model/calculationResultModel')

const PostReorder = (req, res) => {
    const ids = req.body.ids;

    ids.reverse().forEach(async (id) => {
        await calculationResultModel.findOneAndUpdate({_id: id}, {updatedAt: new Date()})
    })
    res.send('ok')


}

module.exports = PostReorder