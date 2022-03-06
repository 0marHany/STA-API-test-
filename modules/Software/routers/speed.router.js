const {
    addTest,
    getAlltest,
    updateTest,
    deleteTest } = require('./../controller/speed');


const router = require('express').Router();

router.post('/createNewtestSpeed', addTest)
router.get('/getAllTestSpeed', getAlltest)
router.put('/updateTestSpeed/:id', updateTest)
router.delete("/deleteTestSpeed/:id", deleteTest)
module.exports = router
