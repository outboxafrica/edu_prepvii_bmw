const express = require('express');
const router = express.Router();
const qnController = require('../controllers/qnControllers');


//list all Qns from db
router.get('/',qnController.home_get);

//list a Qn from db
router.get('/:id', qnController.qn_get);

//delete a Qn from db
router.delete('/:id', qnController.delete_get);

//create question
router.post('/create', qnController.create_post);

module.exports = router;
