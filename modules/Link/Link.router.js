const { addLink,
    updateLink,
    deleteLink,
    getLinkSoftware } = require('./controller/link');

const validationResult = require("../../common/validateRequest")
const { addLinkSchema, updateLinkSchema } = require('./controller/joi/urlValidation');

const router = require('express').Router();

router.post('/addNewlink', validationResult(addLinkSchema), addLink)
router.get('/getLink', getLinkSoftware)
router.put('/updatelink/:id', validationResult(updateLinkSchema), updateLink)
router.delete("/deletelink/:id", deleteLink)
module.exports = router