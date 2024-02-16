import { DataTypes, Model } from 'sequelize';

class Author extends Model {
  static associate(models) { 
    Author.belongsToMany(models.Book, {
      through: 'booksAuthors',
      foreignKey: 'authorId'
    });
  }
}

const initModel = (sequelize) => {
  Author.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY
    }
  }, {
    sequelize,
    modelName: 'Author',
    tableName: 'authors'
  });

  return Author;
}

export default { Author, initModel };