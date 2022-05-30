// Modules
const router = require('express').Router();
const { User, Candy } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

//  GET /dashboard - to show user's subscription and information
router.get('/', withAuth, (req, res) => {
    User.findAll({
        // we are using the user id to find the user's subscription
        where: {
            id: req.session.userId
        }
    })
    // send the response back to the client
    .then(dbUserData => { // render the dashboard.handlebars file
        res.render('dashboard', {
            // we are using the user id to find the user's subscription
            user: dbUserData[0].dataValues,
            // we are using the user id to find the user's subscription
            subscription: dbUserData[0].dataValues.subscription
        });
    })
    // catch any errors
    .catch (err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// router.get('/edit/:id', (req, res) => {
//     // access the candel model to find a single candy
//     User.findOne({
//         // find the candy for the user by id
//         where: {
//             // the id is in the user
//             id: req.params.id
//         } 
//     })
//     // send the response back to the client
//     .then(dbUserData => { 
//         const user = dbUserData.get({ plain: true });
//         res.render('edit-user', {
//             user: user
//         })
//     })
//     // catch any errors
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

module.exports = router;

