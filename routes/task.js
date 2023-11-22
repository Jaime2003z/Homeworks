const express = require('express')
const router = express.Router();
const { JWTValidation } = require('../middlewares/tokenValidate.js');
const{ ListingTasks, TaskCreation, updateTasks, deleteTasks} = require('../controllers/task.js');

router.use( JWTValidation )

router.get('/', ListingTasks)
router.post('/', TaskCreation)
router.put('/:id', updateTasks)
router.delete('/:id', deleteTasks)

module.exports = router;