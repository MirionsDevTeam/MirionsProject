const { Router } = require("express");
const router = Router();
const userRoutes = require("./user.routes");
const eventRoutes = require("./event.routes");

router.use("/users", userRoutes);

router.use("/events", eventRoutes);

module.exports = router;
