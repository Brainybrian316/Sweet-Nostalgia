// modules required for routing
const router = require('express').Router();


// GET signup page
router.get('/signup', (req, res) => {   // we are checking if the user is logged in
    if (req.session.loggedIn) { 
    // if the user is logged in redirect them to the dashboard
      res.redirect('/');
      return;
    }
    // render the signup.handlebars file if the user is not logged in
    res.render('signup');
  });

// GET login page
router.get('/login', (req, res) => {  // we are checking if the user is logged in
    if (req.session.loggedIn) {
    // if the user is logged in redirect them to the dashboard
      res.redirect('/');
      return;
    }
    // render the login.handlebars file if the user is not logged in
    res.render('login');
  });

//  GET home page
router.get('/', (req, res) => { // anyone can access this page
    //  home.handlebars file
    res.render('homepage', {loggedIn: req.session.loggedIn});
});

router.get('/themes', (req,res)=>{

  res.render('themes',{loggedIn : req.session.loggedIn})
})

//  GET subscription page
router.get('/subscription', (req, res) => { // anyone can access this page
  //  home.handlebars file
  // {loggedIn: req.session.loggedIn} might need this
  res.render('subscription', );
});

module.exports = router;