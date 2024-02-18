const express = require("express");
const eventController = require("../../../controllers/eventController");
const router = express.Router();

router.get("/", eventController.getAllEvents);

router.get('/:id',eventController.getEvent);

module.exports = router;