const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('creditcard')
});

module.exports=router;