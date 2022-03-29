var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */

 // existing route above
 
 router.get('/', skillsCtrl.index);
 router.get('/new', skillsCtrl.new);
 router.get('/:id', skillsCtrl.show);


 router.post('/', skillsCtrl.create);

module.exports = router;
