const express = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = express.request) => {
    const { name, email, password } = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    res.status(200).json({
        ok: true,
        name, email, password
    })
}

const userLogin = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

const tokenPlusValidate = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

module.exports = {
    userLogin,
    createUser,
    tokenPlusValidate
}