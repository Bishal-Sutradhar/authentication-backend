const express = require('express')
const authController = require('../controllers/auth.controller')

const router = express.Router()

router.post('/register', authController.registerUser)
router.get('/get-data', authController.getData)

router.get('/test', (req, res) => {

    console.log(req.cookies)

    res.json({
        message: "Test route",
        cookies: req.cookies
    })
})


module.exports = router