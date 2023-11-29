const { payment } = require('../models')
const { Mentor } = require('../models');

module.exports = {
    getAllPayment: (req, res) => {
        res.send('Get All Payment')
    },
    addPayment: (req, res) => {
        res.send('Add Payment')
    },
    booking: async(req, res) => {
        const mentorId = req.body.mentor_id;
        const mentoring_date_time = req.body.mentoring_date_time;

        const mentor = await Mentor.findByPk(mentorId);
        
        const pay = await payment.create({
            id_mentor: mentor.id,
            mentoring_date_time,
            date_payment: new Date(),
            id_user : req.payload.userId,
            price: mentor.price,
            is_Paid : 0
        })

        res.json({
            message: 'booking success',
            data: {
                pay: pay.id
            }
        })

    },
    pay : async(req, res) => {
        const paymentId = req.params.paymentId;

        await payment.update({
            is_Paid: 1

        }, {
            where: {
                id: paymentId
            }
        }) 

        res.json({
            message: 'payment success'
        })

    }
}