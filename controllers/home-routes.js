// modules required for routing
const router = require('express').Router();
const { Users, Candies, CandyBox, Subscription } = require('../models');
const withAuth = require('../utils/auth');


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

  router.get('/creditcard',(req,res)=>{
    res.render('creditcard')
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

router.get('/thankyou', withAuth, (req, res) => {
  // access the candyBox model to find a subscription
  Users.findOne({
          // find the subscription for the user by id
          where: {
              id: req.session.users
          },
          attributes: ['id', 'first_name', 'last_name', 'email', 'address', 'city', 'state', 'zipCode'],
          include: [
              {
                  model: CandyBox,
                  attributes: ['id', 'decade', 'price', 'stock',],
                  include: [
                      {
                          model: Candies,
                          attributes: ['id', 'candy_name'],
              }
          ]
      }
          ], 
  })
  // send the response back to the client
  .then(dbSubscriptionData => {
      if (!dbSubscriptionData) {
          res.status(404).json({ message: 'No subscription found with this id'});
          return;
      }
      // const users = dbSubscriptionData.map(user => user.get({ plain: true}));
      const users = dbSubscriptionData.get({ plain: true});
      res.render('thankYou', { users, loggedIn: true })
  })
  // catch any errors
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
})

router.get('/subscription', withAuth, (req, res) => {
  // access the candyBox model to find a subscription
  Users.findOne({
          // find the subscription for the user by id
          where: {
              id: req.session.users
          },
          attributes: ['id', 'first_name', 'last_name', 'email', 'address', 'city', 'state', 'zipCode'],
  })
  // send the response back to the client
  .then(dbSubscriptionData => {
      if (!dbSubscriptionData) {
          res.status(404).json({ message: 'No subscription found with this id'});
          return;
      }
      const users = dbSubscriptionData.get({ plain: true});
      res.render('subscription', { users, loggedIn: true })
  })
  // catch any errors
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
})

router.get('/contact-form', (req, res) => {
  
  res.render('contact-form')
})


module.exports = router;