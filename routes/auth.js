const express = require('express');
const router = express.Router();
const { check } = require('express-validator'); 
const { createUser, userLogin, tokenPlusValidate } = require('../controllers/auth.js');
const {listingUsers} = require('../controllers/users.js');
const { FieldsValidation } = require('../middlewares/fieldsValidate.js');
const { JWTValidation } = require('../middlewares/tokenValidate.js')

router.post('/', userLogin)

router.post(
    '/new', 
    [
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'The email is not valid').isEmail(),
        check('password', "The password must be at least 6 characters").isLength({ min: 6}),
        FieldsValidation
    ],
    createUser 
)

router.get('/renew', JWTValidation, tokenPlusValidate)

router.get('/', listingUsers)

module.exports = router;