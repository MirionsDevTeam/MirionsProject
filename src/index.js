const express = require("express");
const app = express();
const routes = require("./routes/index");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerConfig = require("./swagger.json");

const swaggerDocs = swaggerJsDoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/", routes);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
