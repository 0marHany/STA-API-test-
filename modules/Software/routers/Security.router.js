const {
    addTest,
    getLasttest,
    updateTest,
    deleteTest } = require('./../controller/Security');


const router = require('express').Router();

router.post('/createNewtestSpeed', addTest)
router.get('/getAllTestSpeed', getLasttest)
router.put('/updateTestSpeed/:id', updateTest)
router.delete("/deleteTestSpeed/:id", deleteTest)
module.exports = router
