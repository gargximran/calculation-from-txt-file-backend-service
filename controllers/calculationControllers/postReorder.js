const calculationResultModel = require('../../db/model/calculationResultModel')

const PostReorder = (req, res) => {
    const ids = req.body.ids;

    ids.reverse().forEach((id) => {
        calculationResultModel.findOneAndUpdate({_id: id}, {updatedAt: new Date()})
            .then(re => {
                return false
            })
            .catch(e => false)


    })
    res.send('ok')


}

module.exports = PostReorder