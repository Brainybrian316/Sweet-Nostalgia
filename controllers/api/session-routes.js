const router = require("express").Router();
const { Users} = require("../../models");

 // ability to login
 router.post('/login', (req, res) => {
    // access the User model and find the user with the email we are trying to log in with
    Users.findOne({
      where: {
        // the email is the email we are trying to log in with
        email: req.body.email
      }
    }).then(dbUserData => {
        // if the user is not found we send an error
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
      // this variable is to check if the password is correct
      const validPassword = dbUserData.checkPassword(req.body.password);
      // if the password is incorrect we send an error
        if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
        }
          // set up session if the password is correct
          req.session.save(() => {
            req.session.users = dbUserData.id;
            // set the session username to the username of the user who is logging in
            req.session.email = dbUserData.email,
            // the purpose of session.loggedIn is to check if the user is logged in or not
            req.session.loggedIn = true,
            // send the response with the user data
    res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
});
});

  // ability to logout 
router.post('/logout', (req, res) => {
    // if the user is logged in they have the ability to logout
    if (req.session.loggedIn) {
        // destroy the session
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        // if the user is not logged in they cannot logout and will receive an error (the logout button will not show)
        res.status(404).end();
    }
});

module.exports = router;