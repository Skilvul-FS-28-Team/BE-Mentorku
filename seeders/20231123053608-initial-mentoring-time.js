'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Mentoring_times', [
      {
        mentor_id: 2,
        avaliable_date_time: new Date('2023-11-01T14:00:00'),
        status: false
      },
      {
        mentor_id: 2,
        avaliable_date_time: new Date('2023-11-01T16:00:00'),
        status: false
      },
      {
        mentor_id: 2,
        avaliable_date_time: new Date('2023-11-01T18:00:00'),
        status: false
      },
      {
        mentor_id: 3,
        avaliable_date_time: new Date('2023-11-01T14:30:00'),
        status: false
      },
      {
        mentor_id: 3,
        avaliable_date_time: new Date('2023-11-01T16:30:00'),
        status: false
      },
      {
        mentor_id: 3,
        avaliable_date_time: new Date('2023-11-01T18:30:00'),
        status: false
      },
      {
        mentor_id: 4,
        avaliable_date_time: new Date('2023-11-01T15:00:00'),
        status: false
      },
      {
        mentor_id: 4,
        avaliable_date_time: new Date('2023-11-01T17:00:00'),
        status: false
      },
      {
        mentor_id: 4,
        avaliable_date_time: new Date('2023-11-01T19:00:00'),
        status: false
      },
      {
        mentor_id: 5,
        avaliable_date_time: new Date('2023-11-01T15:30:00'),
        status: false
      },
      {
        mentor_id: 5,
        avaliable_date_time: new Date('2023-11-01T17:30:00'),
        status: false
      },
      {
        mentor_id: 6,
        avaliable_date_time: new Date('2023-11-01T19:30:00'),
        status: false
      },
      {
        mentor_id: 6,
        avaliable_date_time: new Date('2023-11-01T21:30:00'),
        status: false
      },
      {
        mentor_id: 7,
        avaliable_date_time: new Date('2023-11-01T10:30:00'),
        status: false
      },
      {
        mentor_id: 7,
        avaliable_date_time: new Date('2023-11-02T19:30:00'),
        status: false
      },
      {
        mentor_id: 8,
        avaliable_date_time: new Date('2023-11-02T15:30:00'),
        status: false
      },
      {
        mentor_id: 9,
        avaliable_date_time: new Date('2023-11-02T17:30:00'),
        status: false
      },
      {
        mentor_id: 10,
        avaliable_date_time: new Date('2023-11-02T19:30:00'),
        status: false
      },
      {
        mentor_id: 10,
        avaliable_date_time: new Date('2023-11-02T21:30:00'),
        status: false
      },
      {
        mentor_id: 11,
        avaliable_date_time: new Date('2023-11-02T10:30:00'),
        status: false
      },
      {
        mentor_id: 11,
        avaliable_date_time: new Date('2023-11-03T19:30:00'),
        status: false
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Mentoring_times', null, {});
  }
};
