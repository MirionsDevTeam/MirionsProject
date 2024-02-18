const { Router } = require("express");
const router = Router();

const apiRoutes = require('./api/index');

router.use("/api",apiRoutes);



module.exports = router;
