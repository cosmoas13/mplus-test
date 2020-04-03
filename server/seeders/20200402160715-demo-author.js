"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "authors",
      [
        {
          name: "Pidi Baiq",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mark Pilgrim",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ziggy Zezsyazeoviennazabrizkie",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],

      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("authors", null, {});
  }
};
