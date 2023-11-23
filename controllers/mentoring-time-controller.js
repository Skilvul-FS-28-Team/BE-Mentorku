const { Mentoring_time } = require('../models');

module.exports = {

    getAllMentoringTime: async (req, res) => {
        const mentoring_time = await Mentoring_time.findAll();
        res.json({
            mentoring_time
        })
    },
}