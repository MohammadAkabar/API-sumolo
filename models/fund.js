'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Fund extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fund.init(
    {
      capital: DataTypes.INTEGER,
      obtained_at: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Fund',
    }
  )
  return Fund
}
