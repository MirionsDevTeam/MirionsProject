"use strict";

const eventService = require('../services/eventService');

const getAllEvents = async (_req, res, _next) => {
    try {
        const events = await eventService.getAllEvents();
        
        return res.status(200).json(events);
    } catch (err) {
        return res.status(500).send('Error al recuperar los eventos');
    }
};

const getEvent = async (req, res, _next) => {
    try {
        const event = await eventService.getEvent(req.params.id);

        return res.status(200).json(event);
    } catch (err) {
        return res.status(err.statusCode).send(err.message);
    }
};

const getEventsWithFilters = async (req, res, _next) => {
    try {
        const events = await eventService.getEventsWithFilters(req.body);

        return res.status(200).json(events);
    } catch (err) {
        return res.status(err.statusCode).send(err.message);
    }
};

const storeEvent = async (req, res, _next) => {
    try {
        const newEvent = await eventService.storeEvent(req.body);

        return res.status(201).send(`Evento ${newEvent.id} creado correctamente`);
    } catch (error) {
        return res.status(500).send(`Se produjo el siguiente error: ${error.message}`);
    }
};

const updateEvent = async (req, res, _next) => {
    try {
        const id = req.params.id;
        const body = req.body;

        await eventService.updateEvent(id, body);

        return res.status(200).send(`Evento ${id} actualizado correctamente`);
    } catch (error) {
        return res.status(error.statusCode).send(`Se produjo el siguiente error: ${error.message}`);
    }
};

const deleteEvent = async (req, res, _next) => {
    try {
        const id = req.params.id;
        await eventService.deleteEvent(id, req);

        return res.status(200).send(`El evento ${id} se ha eliminado correctamente`);
    } catch (err) {
        return res.status(err.statusCode).send(err.message);
    }
};

module.exports = {
    storeEvent,
    getAllEvents,
    getEvent,
    updateEvent,
    deleteEvent,
    getEventsWithFilters
};
