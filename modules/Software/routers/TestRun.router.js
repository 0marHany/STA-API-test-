const { addTest, getAlltest, updateTest,
    deleteTest } = require('../controller/TestRun');


const router = require('express').Router();

router.post('/createNewtestRun', addTest)
router.get('/getAllTestRun', getAlltest)
router.put('/updateTestRun/:id', updateTest)
router.delete("/deleteTestRun/:id", deleteTest)
module.exports = router
