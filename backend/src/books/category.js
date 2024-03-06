import { DataTypes, Model } from 'sequelize';

class Category extends Model {
  static associate(models) {
    Category.hasMany(models.Book, { foreignKey: 'categoryId' });
  }
}

const initModel = (sequelize) => {
  Category.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories'
  });

  return Category;
}

export default { Category, initModel };