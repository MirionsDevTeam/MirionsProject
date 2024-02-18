"use strict";
const eventService = require('../services/eventService');

const getAllEvents = async (req, res, next) => {
    try {
        const events = await eventService.getAllEvents();
        return res.status(200).json(events);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error al recuperar los eventos');
    }
}

const getEvent = async (req, res, next) => {
    try {
        const event = await eventService.getEvent(req.params.id);
        if (event) {
            return res.status(200).json(event);
        }
        return res.status(404).send(`Evento ${req.params.id} no encontrado`);
    } catch (err) {
        console.err(err);
        return res.status(500).send('Error al recuperar el evento');
    }


}

module.exports = {
    getAllEvents,
    getEvent
}