const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models')

app.use(express.json())
app.use(cors())

//Router
const userRouter = require('./routes/Users')
app.use("/users", userRouter)

db.sequelize.sync().then( () => {
        app.listen(5000, () => {
        console.log("Server running on port 5000")
    })
})
