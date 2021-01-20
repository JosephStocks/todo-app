"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("todos", [
            {
                description: "do homework",
                completed: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                description: "create seed data for the todo app",
                completed: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                description: "finish todo app",
                completed: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                description:
                    "This is just a todo that's semi long to test the look of longer todos",
                completed: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                description: "do the laundry",
                completed: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("todos", null, {});
    },
};
