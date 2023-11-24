const { Mentor } = require('../models');

module.exports = {
    getMentor: async(req, res) => {
        const mentor = await Mentor.findAll({
            include: ['Mentoring_time', 'Payment'],
        });
        


        res.json({
            message: 'Welcome to Mentorku',
            data: mentor
        })
    },
    getMentorByNumber: async(req, res) => {
        
        const limit = parseInt(req.query.limit) || 4; 
        const mentors = await Mentor.findAll({
            limit: limit
        });
    
        res.json({
            message: 'Welcome to Mentorku',
            data: mentors
        });
    },
}