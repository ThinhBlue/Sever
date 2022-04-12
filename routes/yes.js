var express = require('express');
var router = express.Router();

const userController = require('../components/users/controller');
const productController = require('../components/products/controller');
const jwt = require('jsonwebtoken');
const authen = require('../middle/authen');

/**
 * page: register
 * http://localhost:3000/yes/register
 * method: post
 */
router.post('/register', async function (req, res, next) {
    const { email, password, confirm_password } = req.body;
    const result = await userController.register(email, password, confirm_password);
    if (result) {
        res.json({ status: true });
    } else {
        res.json({ status: false });
    }
});

/**
 * page: logout
 * http://localhost:3000/yes/login
 * method: get
 */
router.post('/login', async function (req, res, next) {
    const { email, password } = req.body;
    const result = await userController.login(email, password);
    if (result) {
        const token = jwt.sign({ _id: result._id, email: result.email }, 'mykey');
        res.json({ status: true, result, token });
        res.redirect('san-pham');
    } else {
        res.json({ status: false });
    }
});

/**
 * page: logout
 * http://localhost:3000/yes/products
 * method: get
 */

router.get('/products', [authen.checkToken], async function (req, res, next) {
    const products = await productController.getProducts();
    res.json({products});
});
router.get('/products/:id/detail', [authen.checkToken], async function (req, res, next) {
    const {id} = req.params;
    const product = await productController.getById(id);
    res.json({product});
});

module.exports = router;