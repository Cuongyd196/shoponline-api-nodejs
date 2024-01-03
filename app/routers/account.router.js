const express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var controller = require('../controllers/account.controller.js') 

// Tao tài khoản
router.post('/register',
    [check('username').notEmpty().withMessage('username khong duoc phep de trong'),
    check('password').notEmpty().withMessage('password khong duoc phep de trong')],
    controller.register);

// đăng nhập
router.post('/login', controller.login);
// getAll
router.get('/', controller.getAll);
// getOne
router.get('/:id', controller.getById);
// update
router.put('/:id', controller.update);
// delete
router.delete('/:id', controller.delete);
// changePassword
router.put('/change-password/:id', controller.changePassword);

module.exports = router


