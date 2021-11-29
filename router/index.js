const calculationRouter = require('./calculationRouter')

const registerRoutersToApp = (app) => {
    app.use(calculationRouter)
}

module.exports = registerRoutersToApp