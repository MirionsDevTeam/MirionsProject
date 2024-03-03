const express = require("express");
const userController = require("../../../controllers/userController");
const router = express.Router();

/**
* @swagger
* components:
*  schemas:
*   User:
*    type: object
*    properties:
*       name:
*        type: string
*       surname:
*        type: string
*       email:
*        type: string
*       nickname:
*        type: string
*       password:
*        type: string
*       birthDate:
*        type: string
*        format: date-time
*       imageUrl:
*        type: string
*       phone:
*        type: string
*       provincia:
*        type: string
*       city:
*        type: string
*       observations:
*        type: string
*       zipCode:
*        type: string
*       createdAt:
*        type: string
*       createdBy:
*        type: integer
*        format: int32
*       updatedAt:
*        type: string
*        format: date-time
*       updatedBy:
*        type: integer
*        format: int32
*       deletedAt:
*        type: string
*        format: date-time   
*       deletedBy:
*        type: integer
*        format: int32
* @swagger
*  tags:
*    name: Users
*    description: Controlador de Usuarios.
 * @swagger
 * /api/v1/users:
 *  get:
 *    tags: [Users]
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/User'
 */
router.get("/", userController.getAllUsers);

/**
* @swagger
* /api/v1/users/{id}:
*  get:
*    tags: [Users]
*    description: Use to request one comando
*    parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: Numeric ID of the user to get
*    responses:
*      '200':
*        description: A successful response
*        content:
*          application/json:
*              schema:
*                  type: object
*                  $ref: '#/components/schemas/User'
*/
router.get('/:id',userController.getUser);

module.exports = router;
