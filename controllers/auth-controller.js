const bcrypt = require('bcrypt');
const { User } = require('../models');
var jwt = require('jsonwebtoken');

module.exports = {
    register: async(req, res) => {
        try {

            let data = req.body;

            const existingUser = await User.findOne({
                where: {
                    email: data.email
                }
            });

            if (existingUser) {
                return res.status(400).json({
                    message: 'Email sudah terdaftar. Gunakan email lain.'
                });
            }

            const hash = bcrypt.hashSync(data.password, 12);
            data.password = hash;
    
            let newUser = {
                name: data.name,
                email: data.email,
                password: data.password,
                age: data.age,
                gender: data.gender
            };
    
            await User.create(newUser);
    
            res.json({
                message: 'Penambahan user berhasil'
            });
        } catch (error) {
            console.error('Error saat menambahkan user:', error);
            res.status(500).json({
                message: 'Terjadi kesalahan saat menambahkan user'
            });
        }
    },
    login: async(req, res) => {
        try {
            let data = req.body;

            const searchMail = await User.findOne({
                where: {
                    email: data.email
                }
            });

            if(!searchMail) {
                return res.status(400).json({
                    message: 'Email tidak ditemukan'
                });
            }

            if(bcrypt.compareSync(data.password, searchMail.password)){
                let token = jwt.sign({email:searchMail.email}, 'secret');

                res.json({
                    message: 'Login berhasil',
                    token
                })
                return
            } else {
                res.json({
                    message: 'Password yang dimasukkan salah'
                })

                return
            }
        }catch(error){
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan saat login'
            });
        }
    }
}