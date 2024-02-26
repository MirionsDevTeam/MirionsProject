const express = require("express");
const eventController = require("../../../controllers/eventController");
const router = express.Router();

/**
* @swagger
* components:
*  schemas:
*   Event:
*    type: object
*    properties:
*       title:
*        type: string
*       description:
*        type: string
*       provincia:
*        type: string
*       city:
*        type: string
*       address:
*        type: string
*       location:
*        type: string
*       eventType:
*        type: string
*       minGuests:
*        type: integer
*        format: int32
*       maxGuests:
*        type: integer
*        format: int32
*       observations:
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
*    name: Events
*    description: Controlador de Eventos.
 * @swagger
 * /api/v1/events:
 *  get:
 *    tags: [Events]
 *    description: Use to request all Events
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Event'
 */
router.get("/", eventController.getAllEvents);

/**
* @swagger
* /api/v1/events/{id}:
*  get:
*    tags: [Events]
*    description: Use to request one Event
*    parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: Numeric ID of the comando to get
*    responses:
*      '200':
*        description: A successful response
*        content:
*          application/json:
*              schema:
*                  type: object
*                  $ref: '#/components/schemas/Event'
*/
router.get('/:id',eventController.getEvent);

module.exports = router;