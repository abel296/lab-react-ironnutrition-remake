module.exports = app => {

    // Base URLS
    app.use('/gif', require('./gif.routes.js'))
}