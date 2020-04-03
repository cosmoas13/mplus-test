"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "types",
      [
        {
          name: "Novel",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Documentation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Other",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("types", null, {});
  }
};
