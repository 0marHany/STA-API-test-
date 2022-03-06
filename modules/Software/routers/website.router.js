const { addTest, getAlltest, updateTest,
    deleteTest } = require('../controller/website');


const router = require('express').Router();

router.post('/createNew_Webtest', addTest)
router.get('/getAll_Webtest/:id', getAlltest)
// // router.get('/getTestuser_Webtest/:id', getTest)
router.put('/updateTest_Webtest/:id', updateTest)
router.delete("/deleteTest_Webtest/:id", deleteTest)
module.exports = router
