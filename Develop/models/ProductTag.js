const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    tagID: {
      type: DataTypes.INTEGER,
      references: {
        model: `tag`,
        key: `id`
      },
    },
    productID: {
      type: DataTypes.INTEGER,
      references: {
        model: `product`,
        key: `id`
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'productTag',
  }
);

module.exports = ProductTag;
