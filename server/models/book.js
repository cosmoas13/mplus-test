"use strict";
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define(
    "book",
    {
      title: DataTypes.STRING,
      id_author: DataTypes.INTEGER,
      id_type: DataTypes.INTEGER,
      date_published: DataTypes.DATEONLY,
      pages: DataTypes.INTEGER
    },
    {}
  );
  book.associate = function(models) {
    book.belongsTo(models.author, {
      foreignKey: "id_author",
      as: "author"
    });
    book.belongsTo(models.type, {
      foreignKey: "id_type",
      as: "type"
    });
  };
  return book;
};
