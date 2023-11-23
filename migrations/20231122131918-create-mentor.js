'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mentors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      yoe: {
        type: Sequelize.INTEGER
      },
      profile_image: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.TEXT
      },
      instagram: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      personal_web: {
        type: Sequelize.STRING
      },
      personal_web: {
        type: Sequelize.STRING
      },
      skill_1: {
        type: Sequelize.STRING
      },
      skill_2: {
        type: Sequelize.STRING
      },
      skill_3: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mentors');
  }
};