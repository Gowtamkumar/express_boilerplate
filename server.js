const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const app = express();
const logger = require('./src/middlewares/logger')

// load env vars
dotenv.config({ path: './src/config/config.env' });



// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// all routes
const mainRoutes = require('./src/routes/routes');
mainRoutes(app);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} Mode on Port ${PORT}`))