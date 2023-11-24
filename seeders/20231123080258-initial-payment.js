'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('payments', [
      {
        id_user: 3,
        id_mentor: 3,
        date_payment: new Date('2023-11-01T17:00:00'),
        mentoring_date_time: new Date('2023-11-01T17:00:00'),
        price: 80000,
        is_Paid: true
      },
      {
        id_user: 5,
        id_mentor: 4,
        date_payment: new Date('2023-11-01T15:00:00'),
        mentoring_date_time: new Date('2023-11-01T17:00:00'),
        price: 80000,
        is_Paid: true
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('payments', null, {});
  }
};
