"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.

    // Example:
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John",
          email: "john@gmail.com",
          encrypted_password: bcrypt.hashSync("123456", 12),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    //  Add commands to revert seed here.

    // Example:
    await queryInterface.bulkDelete("Users", null, {});
  },
};
