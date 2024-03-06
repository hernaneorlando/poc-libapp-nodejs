import { DataTypes, Model } from 'sequelize';

class Book extends Model {
  static associate(models) {
    Book.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      allowNull: false,
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });

    Book.belongsTo(models.Author, {
      as: 'mainAuthor',
      foreignKey: 'mainAuthorId' 
    });

    Book.belongsToMany(models.Author, {
      through: 'booksAuthors',
      foreignKey: 'bookId'
    });

    Book.belongsTo(models.Publisher, {
      foreignKey: 'publisherId',
      allowNull: false,
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });

    Book.hasMany(models.Checkout, { 
      foreignKey: 'bookId' 
    });
  }
}

const initModel = (sequelize) => {
  Book.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    totalPages: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    publishedDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'books'
  });

  return Book;
}

export default { Book, initModel };