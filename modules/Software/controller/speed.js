
const speedsModel = require("../../../model/speeds.model");


const addTest = async (req, res) => {
    const {
        loadingExperince,
        LE_FCP,
        LE_FID,
        LE_CLS,
        LE_LCP,
        OriginLoadingExperince,
        OLE_FCP,
        OLE_FID,
        OLE_CLS,
        OLE_LCP,
        LH_TBT,
        LH_SI,
        LH_FCP,
        LH_TTI,
        LH_CLS,
        LH_LCP,
        PR_Precentage
    } = req.body;
    const new_Test = await speedsModel.insertMany({

        loadingExperince,
        LE_FCP,
        LE_FID,
        LE_CLS,
        LE_LCP,
        OriginLoadingExperince,
        OLE_FCP,
        OLE_FID,
        OLE_CLS,
        OLE_LCP,
        LH_TBT,
        LH_SI,
        LH_FCP,
        LH_TTI,
        LH_CLS,
        LH_LCP,
        PR_Precentage
    });
    res.json({ message: "Done", new_Test });
}
const getAlltest = async (req, res) => {
    try {
        const get = await speedsModel.find({});
        res.json({ message: "Done", get });
    } catch (error) {
        res.json({ message: "error", error });
    }
}

const updateTest = async (req, res) => {
    const {

        loadingExperince,
        LE_FCP,
        LE_FID,
        LE_CLS,
        LE_LCP,
        OriginLoadingExperince,
        OLE_FCP,
        OLE_FID,
        OLE_CLS,
        OLE_LCP,
        LH_TBT,
        LH_SI,
        LH_FCP,
        LH_TTI,
        LH_CLS,
        LH_LCP,
        PR_Precentage
    } = req.body;
    const Updated = await speedsModel.findByIdAndUpdate({ _id: req.params.id }, {

        loadingExperince,
        LE_FCP,
        LE_FID,
        LE_CLS,
        LE_LCP,
        OriginLoadingExperince,
        OLE_FCP,
        OLE_FID,
        OLE_CLS,
        OLE_LCP,
        LH_TBT,
        LH_SI,
        LH_FCP,
        LH_TTI,
        LH_CLS,
        LH_LCP,
        PR_Precentage
    })
    res.json({ message: "Done", Updated })
}

const deleteTest = async (req, res) => {
    const deleted = await speedsModel.deleteMany({
        _id: req.params.id
    })
    res.json({ message: "Succesful", deleted })
}

module.exports = {
    addTest,
    getAlltest,
    updateTest,
    deleteTest
}