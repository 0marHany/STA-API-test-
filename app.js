const express = require('express');
const mongoose = require('mongoose')
const {
    userRouter,
    // TestRunRouter,
    speedRouter,
    //     websiteRouter,
    linkRouter
} = require('./router/allRouter');
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors({ origin: '*' }))

// createTables()
app.use(
    userRouter,
    // TestRunRouter,
    speedRouter,
    //     websiteRouter,
    linkRouter
)

app.listen(process.env.PORT || 5000)