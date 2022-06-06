const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('thankYou')
})


module.exports=router;