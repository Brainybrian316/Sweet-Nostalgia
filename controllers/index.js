// Modules to require:
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');

// new routes

const creditCardRoutes = require('./creditCard-routes');
const thankYou = require('./thankYou-routes');



// The path to the home-routes.js example: www.example.com/
router.use('/', homeRoutes);
// The path to the api-routes.js example: www.example.com/api/
router.use('/api', apiRoutes);
//  The path to the dashboard-routes.js example: www.example.com/dashboard/
router.use('/dashboard', dashboardRoutes);


// new routes
router.use('/creditcard', creditCardRoutes);
router.use('/thankyou',thankYou);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;