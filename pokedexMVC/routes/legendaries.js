const express= require('express');
var router= express.Router();

const controller= require('../controller/legendariesController')


router.get('/pineco', controller.getOneLegendary)


module.exports=router;