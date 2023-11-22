const express = require('express');
const Usuario = require('../models/userScheme');

const listingUsers = async(req, res = express.request) => {
    const usuarios = await Usuario.find().populate('tareas', 'title')

    try{
        res.status(200).json({
                ok: true,
                usuarios,
            })
        } catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error Interno',
        })
    }
}

module.exports =  {
    listingUsers
}