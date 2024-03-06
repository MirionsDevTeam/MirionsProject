require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require('morgan') // Carga el logger de Morgan
const bodyParser = require("body-parser");

const app = express();
const routes = require("./routes/index");

// Config swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerConfig = require("./config/swagger.json");
const swaggerDocs = swaggerJsDoc(swaggerConfig);

//Asociaciones entre modelos
const getAssoc = require('./utils/getAssoc');

//Errores personalizados
const  createCustomError  = require('./utils/errorHandler.js');
const CustomError = createCustomError();

//Definición global de funciones
global.getAssoc = getAssoc;
global.CustomError = CustomError;


app
  .use(cors())
  .use(morgan('dev')) // Carga el middleware de Morgan
  .use(bodyParser.json()) // to support JSON-encoded bodies
  .use(
    bodyParser.urlencoded({
      // to support URL-encoded bodies
      extended: true,
    })
  )
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)) // ruta swagger
  .use("/", routes); // enrutamientos

// inicialización
app.listen(process.env.port | 3000, () => {
  console.log("Example app listening on port 3000!");
});
