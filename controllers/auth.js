const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/userScheme');
const { generateJWT } = require('../helpers/jwt')

const createUser = async (req, res = express.request) => {
    const { name, email, password } = req.body
    
    try{
        let usuario = await Usuario.findOne({email: email})
        if (usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario con ese correo ya existe',
            })

        }
        usuario = new Usuario( req.body);
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);
        await usuario.save();

        res.status(200).json({
            ok: true,
            usuario,
        })
    } catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            error,
        })
    }
}

const userLogin = async(req, res = express.request) => {
    const { email, password } = req.body

    try{
        let usuario = await Usuario.findOne({email: email})
        if (!usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario NO existe',
            })
        }
        const passwordValid = bcrypt.compareSync(password, usuario.password);
        if (!passwordValid){
            return res.status(400).json({
                ok: false,
                msg: 'El password NO es valido',
            })
        }

        const token = await( generateJWT(usuario.id, usuario.name) )

        res.status(200).json({
            ok: true,
            usuario,
            token
        })
    } catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            error,
        })
    }
}

const tokenPlusValidate = async(req, res = express.request) => {
    const {uid, name} = req

    const token = await( generateJWT(uid, name) )
    
    res.json({
        ok: true,
        token
    })
}

module.exports = {
    userLogin,
    createUser,
    tokenPlusValidate
}