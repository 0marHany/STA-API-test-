// const linkModel = require('../../../model/links.model');
const websiteModel = require('../../../model/website.modal');

const addTest = async (req, res) => {
    const {
        numberOftest,
        Tests_Pass,
        Tests_Failed,
        totalTestTitme,
        lastTestDate,
        LinkId } = req.body;
    const new_Test = await websiteModel.insertMany({
        numberOftest,
        Tests_Pass,
        Tests_Failed,
        totalTestTitme,
        lastTestDate,
        LinkId
    });
    res.json({ message: "Done", new_Test });
}
const getAlltest = async (req, res) => {
    const link = await websiteModel.find({
        include: [{
            model: linkModel,
            where: {
                id: req.params.id
            }
        },]
    })
    res.json({ message: "Done", link });
}

// const getTest = async (req, res) => {
//     const { id } = req.params;
//     const link = await websiteModel.findOne({
//         where: {
//             id
//         }
//     });
//     res.json({ message: "Done", link })
// }

const updateTest = async (req, res) => {
    const {
        numberOftest,
        Tests_Pass,
        Tests_Failed,
        totalTestTitme,
        lastTestDate,
    } = req.body;
    const Updated = await websiteModel.updateMany({ _id: req.params.id }, {
        numberOftest,
        Tests_Pass,
        Tests_Failed,
        totalTestTitme,
        lastTestDate,
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
    // getTest,
    updateTest,
    deleteTest
}