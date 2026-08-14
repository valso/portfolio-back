const express = require('express')
const router = express.Router()
const { Roles } = require('../models')
const { where } = require('sequelize')

router.get("/", async (req, res) => {
    const roles = await Roles.findAll()
    res.json(roles)
})

router.get("/:userId", async (req, res) => {
    const userId = req.params.userId

    const roles = await Roles.findAll({
        where: {
            UserId: userId
        }
    })

    res.json(roles)
})

router.post("/", async (req, res) => {
    const roleData = req.body

    await Roles.create(roleData)

    const response = {
        "message": "Role created successfully",
        "data": roleData
    }

    res.json(response)

})

module.exports = router