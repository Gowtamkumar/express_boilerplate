const bootcamp = require('../modules/bootcamp/route/bootcamp.route');

module.exports = app => {
    app.use('/api/v1/bootcamp', bootcamp);
}
