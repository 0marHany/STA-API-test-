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
mongoose.connect('mongodb+srv://omar:12345@cluster0.9f7gc.mongodb.net/project')
app.listen(process.env.PORT || 5000)


// mongodb+srv://omar:12345@cluster0.9f7gc.mongodb.net/test
//mongodb+srv://omarhany:Omar@123@cluster0.bvmon.mongodb.net/test