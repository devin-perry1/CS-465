const express = require('express');
const router = express.Router();
const {expressjwt: jwt} = require('express-jwt');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    algorithms: ["HS256"],
});

const authController = require('../controllers/authentication');
const mealsController = require('../controllers/meals');
const newsController = require('../controllers/news');
const roomsController = require('../controllers/rooms');
const travelController = require('../controllers/travel');
const tripsController = require('../controller/trips');

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

router
    .route('/meals')
    .get(mealsController.mealList);

router
    .route('/meals/:mealCode')
    .get(mealsController.mealsFindCode);

router
    .route('/news')
    .get(newsController.newsList);

router
    .route('/news/:newsCode')
    .get(newsController.newsFindCode);

router
    .route('/rooms')
    .get(roomsController.roomList);

router
    .route('/rooms/:roomCode')
    .get(roomsController.roomsFindCode);

router
    .route('/trips')
    .get(travelController.tripList)
    .post(auth, travelController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(travelController.tripsFindCode)
    .put(auth, travelController.tripsUpdateTrip)
    .delete(auth, travelController.tripsDeleteTrip);

module.exports = router;
