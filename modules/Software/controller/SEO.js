const SEOModal = require('../../../model/SEO.modal');

const addTest = async (req, res) => {
    const {
        total_traffic,
        key_Word,
        total_traffic_cost,
        backlinks,
        keyWord_1,
        keyWord_2,
        keyWord_3,
        keyWord_4,
        keyWord_5,
        keyWord_6,
        keyWord_7,
        keyWord_8,
        keyWord_9,
        keyWord_10,
        LinkOwner
    } = req.body;
    const new_Test = await SEOModal.insertMany({

        total_traffic,
        key_Word,
        total_traffic_cost,
        backlinks,
        keyWord_1,
        keyWord_2,
        keyWord_3,
        keyWord_4,
        keyWord_5,
        keyWord_6,
        keyWord_7,
        keyWord_8,
        keyWord_9,
        keyWord_10,
        LinkOwner
    });
    res.json({ message: "Done", new_Test });
}
const getLasttest = async (req, res) => {
    try {
        const get = await SEOModal.findOne({}, {}, { sort: { 'createdAt': -1 } }).populate("LinkOwner");
        res.json({ message: "Done", get });
    } catch (error) {
        res.json({ message: "error", error });
    }
}

const updateTest = async (req, res) => {
    const {

        total_traffic,
        key_Word,
        total_traffic_cost,
        backlinks,
        keyWord_1,
        keyWord_2,
        keyWord_3,
        keyWord_4,
        keyWord_5,
        keyWord_6,
        keyWord_7,
        keyWord_8,
        keyWord_9,
        keyWord_10
    } = req.body;
    const Updated = await SEOModal.findByIdAndUpdate({ _id: req.params.id }, {

        total_traffic,
        key_Word,
        total_traffic_cost,
        backlinks,
        keyWord_1,
        keyWord_2,
        keyWord_3,
        keyWord_4,
        keyWord_5,
        keyWord_6,
        keyWord_7,
        keyWord_8,
        keyWord_9,
        keyWord_10
    })
    res.json({ message: "Done", Updated })
}

const deleteTest = async (req, res) => {
    const deleted = await SEOModal.deleteMany({
        _id: req.params.id
    })
    res.json({ message: "Succesful", deleted })
}

module.exports = {
    addTest,
    getLasttest,
    updateTest,
    deleteTest
}