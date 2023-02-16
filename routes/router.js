const express = require('express');
const {formCreation,viewForm} = require('../controllers/user.controller');

const router = express.Router();

router.route('/form').post(formCreation).get(viewForm);

module.exports = router;