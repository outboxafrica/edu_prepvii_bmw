const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//------------------------Creating-Token------------------------------------//
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET);
}
//------------------------Register-New-Users------------------------------------//
module.exports.register_post = async (req, res) => {
    try {

        const { username, password, passwordCheck } = req.body;

        //validate

        if (!username || !password || !passwordCheck) {
            return res.status(400).json({ msg: "Enter all fields" })
        }

        if (password !== passwordCheck) {
            return res.status(400).json({ msg: "Passwords do not match" })
        }
        const existingUser = await User.findOne({ username: username })
        if (existingUser) {
            return res.status(400).json({ msg: "Username already exists" })
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)
        const newUser = new User({
            username,
            password: passwordHash
        })
        const savedUser = await newUser.save();
        res.json(savedUser);

    }

    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

//------------------------Login-Users------------------------------------// 
module.exports.login_post = async (req, res) => {
    try {

        const { username, password } = req.body;

        //validate

        if (!username || !password) {
            return res.status(400).json({ msg: "Enter all fields" })
        }

        const user = await User.findOne({ username: username })
        if (!user) {
            return res.status(400).json({ msg: "Username dose not exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid Password" })
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                username
            }


        })
    }

    catch (err) {
        res.status(500).json({ error: err.message })
    }
}
//------------------------verify token------------------------------------//

module.exports.validateToken = async (req, res, next) => {
    try {

        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(401).json({ msg: 'Access Denied! Register Or Login First' })
        }

        const verified = jwt.verify(token, process.env.SECRET)

        if (!verified) {
            return res.status(401).json({ msg: 'Token verification failed, authorization denied' })
        }
        req.user = verified.id;


        next();

    }

    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports.user_get = async (req, res) => {

    try {
        const logedUser = await User.findById(req.user)


        res.json({
            username: logedUser.username,
            id: logedUser._id
        });
    }

    catch (err) {
        res.status(500).json({ error: err.message })
    }
}




