module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/gif', require('./gif.routes.js'))
}