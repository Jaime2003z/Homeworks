const express = require('express');
const router = express.Router();
const { check } = require('express-validator'); 
const { createUser, userLogin, tokenPlusValidate } = require('../controllers/auth');
const { FieldsValidation } = require('../middlewares/fieldsValidate');

router.post('/', userLogin)

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password').isLength({ min: 6}),
        FieldsValidation
    ],
    createUser )
router.post('/renew', tokenPlusValidate)

module.exports = router;