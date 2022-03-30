"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.

    // Example:
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          name: "Steve Jobs",
          category: "Autobiography",
          author: "Walter Issacson",
          price: 500,
          notes: "Autobiography of Apple Co-Founder, Steve Jobs!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alchemist",
          category: "Story",
          author: "Paulo Coelho",
          price: 450,
          notes: "Story of an Andulasian Boy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Power of Positive Thinking",
          category: "Self-help",
          author: "Norman Wincent",
          price: 200,
          notes: "Think Positive",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zero to One",
          category: "Business",
          author: "Peter Thiel",
          price: 100,
          notes: "Must Read for Business People",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wings Of Fire",
          category: "Autobiography",
          author: "Arun Tiwari",
          price: 500,
          notes: "Autobiography of APJ Abdul Kalam, Missile Man of India",
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
    await queryInterface.bulkDelete("Books", null, {});
  },
};
