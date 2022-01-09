const bodyParser = require('body-parser')
const notas = require('./notasRoute')
const tasks = require('./tasksRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(notas)
    app.use(tasks)
}