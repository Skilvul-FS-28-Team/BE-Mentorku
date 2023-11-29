const { Mentor } = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
    getMentor: async(req, res) => {
        const kataKunci = req.query.q;

        const mentor = await Mentor.findAll({
            include: ['Mentoring_time', 'Payment'],
            where: {
                name: {
                  [Op.like]: kataKunci ? `%${kataKunci}%` : '%',
                }
              }
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
    getMentorById: async(req,res)=>{

        const mentorId = parseInt(req.params.mentorId);

        const mentor= await Mentor.findByPk(mentorId,{include: ['Mentoring_time', 'Payment']});

        res.json({
            message: 'Welcome to Mentorku',
            data: mentor
        })
    }
}