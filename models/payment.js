'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment.init({
    id_user: DataTypes.INTEGER,
    id_mentor: DataTypes.INTEGER,
    date_payment: DataTypes.DATE,
    mentoring_date_time: DataTypes.DATE,
    price: DataTypes.INTEGER,
    is_Paid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'payment',
  });
  return payment;
};