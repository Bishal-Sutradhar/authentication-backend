const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')


const registerUser = async (req, res) => {

    const { username, email, password } = req.body

    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    console.log(isUserAlreadyExists)

    if(isUserAlreadyExists) {
        return res.status(409).json({
            message: "User already exists!"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully!",
        user: user
    })

}

const getData = async (req, res) => {

    const userData = await userModel.find()

    res.status(200).json({
        message: "User data fetched successfully!",
        user_data: userData
    })
}

module.exports = { registerUser, getData }