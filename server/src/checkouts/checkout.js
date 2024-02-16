import { DataTypes, Model } from 'sequelize';

class Checkout extends Model {
  static associate(models) { }
}

const initModel = (sequelize) => {
  Checkout.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Checkout',
    tableName: 'checkouts'
  });

  return Checkout;
}

export default { Checkout, initModel };