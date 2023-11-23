const { Mentor } = require('../models');


module.exports = {
    getMentor: async(req, res) => {
        const mentor = await Mentor.findAll();

        res.json({
            message: 'Welcome to Mentorku',
            data: mentor
        })
    },
    getMentorByNumber: async(req, res) => {
        
        const limit = parseInt(req.query.limit) || 4; // Jika parameter limit tidak diberikan, gunakan nilai default 10
        const mentors = await Mentor.findAll({
            limit: limit
        });
    
        res.json({
            message: 'Welcome to Mentorku',
            data: mentors
        });
    },
}