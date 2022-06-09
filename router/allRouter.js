const userRouter = require('../modules/user/user.router');

const SecurityRouter = require('../modules/Software/routers/Security.router');
const speedRouter = require('../modules/Software/routers/speed.router');
const SEO = require('../modules/Software/routers/SEO.router');

const linkRouter = require('../modules/Link/Link.router');

module.exports = {
    userRouter,
    SecurityRouter,
    speedRouter,
    SEO,
    linkRouter
}