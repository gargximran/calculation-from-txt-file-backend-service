const router = require('express').Router()

// controllers
const postCalculate = require('../controllers/calculationControllers/postCalculate')
const postReorder = require('../controllers/calculationControllers/postReorder')
const getCalculationHistory = require('../controllers/calculationControllers/getCalculationHistory')

// validators
const calculateValidator = require('../validators/calculate.validator')

router.post('/calculate', calculateValidator, postCalculate)
router.post('/reorder', postReorder)
router.post('/history', getCalculationHistory)



module.exports = router