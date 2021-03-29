'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {};
  Item.init({
    item_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    weight: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};