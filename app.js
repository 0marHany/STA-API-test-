const express = require('express');
// mongoose is a library for mongoDB that helps us to work with mongoDB in Node.js applications
const mongoose = require('mongoose')
const {
    userRouter,
    ALLRouter,
    SecurityRouter,
    speedRouter,
    SEO,
    linkRouter
} = require('./router/allRouter');
const app = express();
const cors = require('cors'); //  for cross origin resource sharing  
require("dotenv").config(); // for reading the .env file
// for creating pdf
const { ALL_PDF } = require('./common/ALL_PDF');
const { createPdf } = require('./common/CreatePDF');
const { SEO_PDF } = require('./common/SEO_PDF');
const speedsModel = require('./model/speeds.model');
const SEOModal = require('./model/SEO.modal');
const SecurityModel = require('./model/Security.model');
const ALLModel = require('./model/ALL.model');

app.use(express.json())
app.use(cors({ origin: '*' }))

// createTables()
app.use(
    userRouter,
    ALLRouter,
    SecurityRouter,
    speedRouter,
    SEO,
    linkRouter
)
app.get('/Speed_PDF', async (req, res) => {
    try {
        const Resulte = await speedsModel.findOne({}, {}, { sort: { 'createdAt': -1 } });
        createPdf(Resulte, "Performance.pdf")
        res.end();
    } catch (error) {
        res.json({ Error: error.message })
    }
})

app.get('/SEO_PDF', async (req, res) => {
    try {
        const Resulte = await SEOModal.findOne({}, {}, { sort: { 'createdAt': -1 } });
        SEO_PDF(Resulte, "SEO.pdf");
        res.end();
    } catch (error) {
        res.json({ Error: error.message })
    }

})
app.get('/ALL_PDF', async (req, res) => {
    try {
        const Resulte = await ALLModel.findOne({}, {}, { sort: { 'createdAt': -1 } });
        ALL_PDF(Resulte, "ALL.pdf");
        res.end();
    } catch (error) {
        res.json({ Error: error.message })
    }
})

mongoose.connect(process.env.MONGOO_CONNECTION);
app.listen(process.env.PORT || 4000)