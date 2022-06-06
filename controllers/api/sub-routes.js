const router = require('express').Router();
const { CandyBox, Candies, Users, Subscription } = require('../../models');
const withAuth = require('../../utils/auth');


// GET all subscriptions
router.get('/', (req, res) => {
    // find all subscriptions
    Subscription.findAll({
    })
        .then(dbSubscriptionData => res.json(dbSubscriptionData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET one subscription
router.get('/:id', (req, res) => {
    // find a single subscription by its `id`
    Subscription.findOne({
        where: {
            id: req.params.id
        },
    })
        .then(dbSubscriptionData => {
            if (!dbSubscriptionData) {
                res.status(404).json({ message: 'No subscription found with this id' });
                return;
            }
            res.json(dbSubscriptionData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// POST new subscription
router.post('/:id', (req, res) => {
    // create a new subscription
    Subscription.create({
        // req.body means passing everything from frontend
        ...req.body,
        users_id: req.session.users
    })
        .then((subscription) => {
            res.json(subscription);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT update subscription
router.put('/:id', (req, res) => {
    // update a subscription's name by its `id` value
    Subscription.update(req.body, {
        where: {
            users_id: req.session.users
        }
    })
        .then(dbSubscriptionData => {
            if (!dbSubscriptionData) {
                res.status(404).json({ message: 'No subscription found with this id' });
                return;
            }
            res.json(dbSubscriptionData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// // PUT update subscription
// router.put('/', withAuth, (req, res) => {
//     // update a subscription's name by its `id` value
//     console.log(req.session.users)
//     Subscription.update(req.body, {
//         where: {
//             id: req.session.users
//         }
//     })
//         .then(dbSubscriptionData => {
            
//             if (!dbSubscriptionData[0]) {
//                 res.status(404).json({ message: 'No subscription found with this id' });
//                 return;
//             }
//             res.json(dbSubscriptionData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


// DELETE subscription by id
router.delete('/:id', (req, res) => {
    // delete on subscription by its `id` value
    Subscription.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbSubscriptionData => {
            if (!dbSubscriptionData) {
                res.status(404).json({ message: 'No subscription found with this id' });
                return;
            }
            res.json(dbSubscriptionData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;