'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mentor.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    yoe: DataTypes.INTEGER,
    profile_image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    desc: DataTypes.STRING,
    instagram: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    personal_web: DataTypes.STRING,
    skill_1: DataTypes.STRING,
    skill_2: DataTypes.STRING,
    skill_3: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};