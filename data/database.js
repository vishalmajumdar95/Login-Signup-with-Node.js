//// Connected with database
const env = require('dotenv').config()
    // console.log(process.env.host);

var knex = require('knex')({
    client: "mysql",
    connection: {
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    }
})

//// Create auth_details table
knex.schema.createTable('user', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.string('password');
}).then(() => {
    console.log("User table created successfully....")
}).catch(() => {
    console.log("user table is already exists!");
})



module.exports = knex;