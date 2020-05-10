const express = require('express')
const router = express.Router()
const vehicleController = require('./../controllers/vehicle.js')
const bookingController = require('./../controllers/booking.js')
const userController = require('../controllers/users.js')

/**
 * @swagger
 *
 * /api/user:
 *   get:
 *     description: Get nearby Vehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: page
 *         description: Page number.
 *         in: query
 *         required: false
 *         type: integer
 *       - name: limit
 *         description: Limit.
 *         in: query
 *         required: false
 *         type: integer 
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/user', userController.getUser);

/**
 * @swagger
 *
 * /api/user/{uid}:
 *   get:
 *     description: Get nearby Vehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description:  particular user
 */
router.get('/user/:uid', userController.getUserByUid);

/**
 * @swagger
 *
 * /api/user/nearby/vehicle:
 *   get:
 *     description: Get nearby Vehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: lat
 *         description: Lattitude of user current location.
 *         in: query
 *         required: true
 *         type: string
 *       - name: lng
 *         description: Longitude of users current location.
 *         in: query
 *         required: true
 *         type: string 
 *       - name: dist
 *         description: Distance in km
 *         in: query
 *         required: true
 *         type: string
 *       - name: page
 *         description: Page number.
 *         in: query
 *         required: false
 *         type: integer
 *       - name: limit
 *         description: Limit.
 *         in: query
 *         required: false
 *         type: integer 
 *     responses:
 *       200:
 *         description: nearby vehicle
 */
router.get('/user/nearby/vehicle', vehicleController.getNearbyVehicle);

/**
 * @swagger
 *
 * /api/user/vehicle/bookings:
 *   get:
 *     description: Get User Bookings
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: uid
 *         description: User id of user.
 *         in: query
 *         required: true
 *         type: integer
 *       - name: page
 *         description: Page number.
 *         in: query
 *         required: false
 *         type: integer
 *       - name: limit
 *         description: Limit.
 *         in: query
 *         required: false
 *         type: integer 
 *     responses:
 *       200:
 *         description: User past bookings
 */
router.get('/user/vehicle/bookings', bookingController.getUserBookings);

/**
 * @swagger
 *
 * /api/user/vehicle/request:
 *   post:
 *     description: Request for vehicle Bookings
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: uid
 *         description: User id of user.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: vid
 *         description: Vehicle id.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: s_lat
 *         description: Start lattitude.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: s_lng
 *         description: Start longitude.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: d_lat
 *         description: Destination lattitude.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: d_lng
 *         description: Destination longitude.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: request vehicle booking
 */
router.post('/user/vehicle/request', bookingController.bookVehicle);

module.exports = router;