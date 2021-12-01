const calculationResultModel = require('../../db/model/calculationResultModel')

const PostReorder = (req, res) => {
    const ids = req.body.ids;
    let updatedDate = Date.parse(new Date().toISOString())

    ids.reverse().forEach(async (id, index) => {
        await calculationResultModel.findOneAndUpdate({_id: id}, {updatedAt: new Date(updatedDate + (index * 100))})

    })
    res.send('ok')


}

module.exports = PostReorder