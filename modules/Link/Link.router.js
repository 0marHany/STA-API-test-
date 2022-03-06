const { addLink,
    updateLink,
    deleteLink,
    getLinkSoftware } = require('./controller/link');


const router = require('express').Router();

router.post('/addNewlink', addLink)
router.get('/getLink', getLinkSoftware)
router.put('/updatelink/:id', updateLink)
router.delete("/deletelink/:id", deleteLink)
module.exports = router