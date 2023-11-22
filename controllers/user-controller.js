const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
    getAllUser: async (req, res) => {
        const users = await User.findAll();
        res.send(users);
    },
    addUser: async (req, res) => {
        let data = req.body

        try {
            const hash = bcrypt.hashSync(data.password, 12);
            data.password = hash
            await User.create(data);
            res.json({
                message: 'berhasil membuat akun',
                data
            })
        } catch (error) {
            res.send(error);
        }
    },
}