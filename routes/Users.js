const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const { where } = require('sequelize')

router.get("/", async (req, res) => {
    const users = await Users.findAll()
    res.json(users)
})

router.get("/:username", async (req, res) => {
    const username = req.params.username

    const user = await Users.findOne({
        where: {
            username: username
        }
    })

    res.json(user)
})

router.post("/", async (req, res) => {
    const userData = req.body

    await Users.create(userData)

    const response = {
        "message": "User created successfully",
        "data": userData
    }

    res.json(response)

})

module.exports = router