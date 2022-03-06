const userModel = require('../../../model/user.model');
const bcrypt = require("bcrypt");

const addUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email: email });
    if (user) {
        res.json({ message: "email is already exist" })
    } else {
        bcrypt.hash(password, 12, async function (err, hash) {
            if (err) throw new Error(err);
            const user = await userModel.insertMany({
                name,
                email,
                password: hash,
            })
            try {
                res.json({ message: 'Done', user })
            } catch (error) {
                res.json({ error: error });
            }
        });
    }
}

/*

*/

const authorization = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            res.json({ message: "Email is not found" })
        } else {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                res.json({ message: "login success", data: user })
            }
            else {
                res.json({ message: "password is not correct" })
            }
        }
    } catch (error) {
        res.json({ error: error });
    }
}

const updateUser = async (req, res) => {

    const { name, password } = req.body

    await userModel.findByIdAndUpdate({ _id: req.params.id }, { name, password })
    const userUpdated = await userModel.findOne({ _id: req.params.id })
    res.json({ message: "Done", data: userUpdated.name })
}


const deleteUser = async (req, res) => {
    await userModel.deleteMany({ _id: req.params.id })
    res.json({ message: "Done" })

}
module.exports = {
    addUser,
    updateUser,
    // getAllUsers,
    // getUser,
    deleteUser,
    authorization,
}