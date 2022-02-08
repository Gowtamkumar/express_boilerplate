const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
var colors = require('colors');

// load env vars
dotenv.config({ path: './src/config/config.env' });

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,

        define: {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const connectPostgreSQL = () => {
    sequelize.authenticate()
        .then(() => console.log(`PostgreSQl Database connected successfull`.yellow.bold))
        .catch((err) => console.log(`Error ${err}`))
}


module.exports = {
    sequelize,
    Sequelize,
    connectPostgreSQL
}