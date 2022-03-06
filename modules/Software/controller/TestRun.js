// const linkModel = require('../../../model/links.model');
const TestRun_Model = require('../../../model/testruns.model');

const addTest = async (req, res) => {
    const {
        AR,
        ER,
        result,
        started,
        end,
        calculation,
        description
    } = req.body;
    const new_Test = await TestRun_Model.insertMany({
        AR,
        ER,
        result,
        started,
        end,
        calculation,
        description,
    });
    res.json({ message: "Done", new_Test });
}
const getAlltest = async (req, res) => {
    const get = await TestRun_Model.find({})

    res.json({ message: "Done", get });
}

const updateTest = async (req, res) => {
    const {
        AR,
        ER,
        result,
        started,
        end,
        calculation,
        description
    } = req.body;
    const Updated = await TestRun_Model.findByIdAndUpdate({ _id: req.params.id }, {
        AR,
        ER,
        result,
        started,
        end,
        calculation,
        description
    })
    res.json({ message: "Done", Updated })
}

const deleteTest = async (req, res) => {
    await userModel.deleteMany({ _id: req.params.id })
    res.json({ message: "Done" })
}

module.exports = {
    addTest,
    getAlltest,
    updateTest,
    deleteTest
}