const newsRouter = require('./news')
const meRouter = require('./me')
const coursesRouter = require('./courses')
const sideRouter = require('./site')

function route(app) {
    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)
    
    app.use('/', sideRouter)
}

module.exports = route
