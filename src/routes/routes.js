const bootcamp = require('../modules/bootcamp/route/bootcamp.route');
const auth = require('../modules/auth/route/auth.route');

module.exports = app => {
    app.use('/api/v1/bootcamp', bootcamp);
    app.use('/api/v1/auth', auth)
}
