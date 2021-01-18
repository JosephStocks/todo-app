let config = {
    host: "localhost",
    port: 5432,
    database: "todo-app",
    user: "postgres",
};

let pgp = require("pg-promise")();

let db = pgp(config);

module.exports = db;
