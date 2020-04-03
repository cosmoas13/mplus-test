"use strict";
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define(
    "author",
    {
      name: DataTypes.STRING
    },
    {}
  );
  author.associate = function(models) {};
  return author;
};
