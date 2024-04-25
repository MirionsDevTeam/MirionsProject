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


/**
@swagger
    /api/v1/users/{mail}:
        get:
            tags: [Users]
            description: Use to request one user by mail
            parameters:
                - in: path
                name: mail
                schema:
                    type: string
                    required: true
                description: email of user to get
            responses:
            '200':
                description: A successful response
                content:
                application/json:
                    schema:
                        type: object
                        $ref: '#/components/schemas/User'
*/

router.get('/:mail',userController.getUserByMail)

/**
@swagger
    /api/v1/users/{filters}:
        get:
            tags: [Users]
            description: Use to request one user by mail
            parameters:
                - in: path
                name: filters
                    schema:
                        type: object
                        $ref: '#/components/schemas/User'
                description: user values to filter with
            responses:
            '200':
                description: A successful response
                content:
                application/json:
                    schema:
                        type: array
                        items:
                            $ref: '#/components/schemas/Users'
*/
router.post('/filters',userController.getUsersWithFilters)

/**
@swagger
    /api/v1/users/:
        post:
            tags: [Users]
            description: Use to insert one user in database
            resquestBody:
                required: true
                content:
                    application/json:
                        schema:
                            type: object
                            $ref: '#/components/schemas/User'
            responses:
            '200':
                description: A successful response
                content:
                    text:
*/
router.post('/',userController.storeUser);

/**
@swagger
    /api/v1/users/{id}:
        put:
            tags: [Users]
            description: Use to insert one user in database
            parameters:
                - in: path
                name: id
                schema:
                    type: string
                    required: true
                description: Numeric ID of the comando to put            
            resquestBody:
                required: true
                content:
                    application/json:
                        schema:
                            type: object
                            $ref: '#/components/schemas/User'
            responses:
            '200':
                description: A successful response
                content:
                    text:
*/
router.put('/:id',userController.updateUser);

/**
@swagger
    /api/v1/users/{id}:
        delete:
            tags: [Users]
            description: Use to delete one user by ID
            parameters:
                - in: path
                name: id
                schema:
                    type: string
                    required: true
                description: Numeric ID of the comando to delete   
            responses:
            '200':
                description: A successful response
                content:
                    text:
*/
router.delete('/:id',userController.deleteUser);

module.exports = router;
