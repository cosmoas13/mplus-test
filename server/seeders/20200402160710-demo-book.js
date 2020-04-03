"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "books",
      [
        {
          title: "Dilan 1995",
          id_author: 1,
          id_type: 1,
          date_published: new Date(),
          pages: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Dive Into Phyton",
          id_author: 2,
          id_type: 2,
          date_published: new Date(),
          pages: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Lucid Dream",
          id_author: 3,
          id_type: 3,
          date_published: new Date(),
          pages: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {});
  }
};
