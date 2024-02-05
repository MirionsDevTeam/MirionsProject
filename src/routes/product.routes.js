const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *   Product:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 * @swagger
 *  tags:
 *    name: products
 *    description: Controlador de Productos.
 * @swagger
 * /api/v1/products:
 *  get:
 *    tags: [products]
 *    description: Use to request all products
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Product'
 */
router.get("/", productController.getAllProducts);
/**
* @swagger
* /api/v1/products:
*  post:
*    tags: [products]
*    description: Use to create new product
*    requestBody:
*       description: A JSON object containing product information
*       required: true
*       content:
*           application/json:
*               schema:
*                   $ref: '#/components/schemas/Product'       
*    responses:
*      '200':
*        description: A successful response
*        content:
*          application/json:
*              schema:
*                  type: object
*                  $ref: '#/components/schemas/Product'
*/
router.post("/", productController.createProduct);

/**
* @swagger
* /api/v1/products/{idProduct}:
*  put:
*    tags: [products]
*    description: Use to create new product
*    parameters:
*       - in: path
*         name: idProduct
*         schema:
*           type: integer
*         required: true
*         description: Numeric ID of the product to get
*    requestBody:
*       description: A JSON object containing product information
*       required: true
*       content:
*           application/json:
*               schema:
*                   $ref: '#/components/schemas/Product'       
*    responses:
*      '200':
*        description: A successful response
*        content:
*          application/json:
*              schema:
*                  type: object
*                  $ref: '#/components/schemas/Product'
*/
router.put("/:idProduct", productController.updateProduct);

/**
* @swagger
* /api/v1/products/{idProduct}:
*  delete:
*    tags: [products]
*    description: Use to create new product
*    parameters:
*       - in: path
*         name: idProduct
*         schema:
*           type: integer
*         required: true
*         description: Numeric ID of the product to get      
*    responses:
*      '200':
*        description: A successful response
*/
router.delete("/:idProduct", productController.updateProduct);

module.exports = router;
