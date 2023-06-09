'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Distribution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Distribution.belongsTo(models.Wakaf)
    }
  }
  Distribution.init(
    {
      WakafId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Wakafs',
          key: 'id',
        },
      },
      count: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Distribution',
    }
  )
  return Distribution
}
