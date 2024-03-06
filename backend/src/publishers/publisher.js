import { DataTypes, Model } from 'sequelize';

class Publisher extends Model {
  static associate(models) { }
}

const initModel = (sequelize) => {
  Publisher.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Publisher',
    tableName: 'publishers'
  });

  return Publisher;
}

export default { Publisher, initModel };