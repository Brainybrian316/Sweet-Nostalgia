// Modules
const router = require('express').Router();
const { Users, Candies, CandyBox, Subscription } = require('../models');
const withAuth = require('../utils/auth');

//  GET home page
router.get('/', withAuth, (req, res) => {
    Users.findOne({
            where: {
                id: req.session.users
            },
            attributes: ['id', 'first_name', 'last_name', 'email', 'address', 'city', 'state', 'zipCode'],
            include: [
                {
                    model: CandyBox,
                    attributes: ['id', 'decade', 'price', 'stock',],
                }
            ], 
        })
        .then(dbUserData => {
            const users = dbUserData.get({ plain: true});
            console.log(users)
            res.render('dashboard', { users, loggedIn: true});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
    // access the candel model to find a single candy
    Users.findOne({
            // find the candy for the user by id
            where: {
                id: req.session.users
            },
            attributes: ['id', 'first_name', 'last_name', 'email', 'address', 'city', 'state', 'zipCode'],
            // include candy model and inside candy model include subscription model
            include: [
                {
                    model: CandyBox,
                    attributes: ['id', 'decade', 'price', 'stock',],
                }
            ], 
        })
        // send the response back to the client
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            const users = dbUserData.get({ plain: true});
            res.render('editprofile', { users, loggedIn: true });
            
        })
        // catch any errors
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/editpass/:id', withAuth, (req, res) => {
    // access the candel model to find a single candy
    Users.findOne({
            // find the candy for the user by id
            where: {
                id: req.session.users
            },
            // include the candy model
            include: [{
                model: CandyBox,
                attributes: ['id', 'decade', 'price', 'stock', ],
            }]
        })
        // send the response back to the client
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            const users = dbUserData.get({ plain: true});
            res.render('password', { users, loggedIn: true });
        })
        // catch any errors
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/sub/:id', withAuth, (req, res) => {
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
        res.render('sub', { users, loggedIn: true })
    })
    // catch any errors
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;