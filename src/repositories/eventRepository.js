"use strict";
const { Event } = require('../models');

const getAllEvents = async () => {
    try {

        return Event.findAll({
            include: getAssoc(Event)
        });
    } catch (err) {
        throw err;
    }
};

const getEvent = async (id) => {
    try {

        const event = await Event.findByPk(id, {
            include: getAssoc(Event)
        });

        if (!event) {
            throw new CustomError(`No se pudo encontrar el evento ${id}`, 512);
        }

        return event;
    } catch (err) {
        throw err;
    }
};

const getEventsWithFilters = async (filters) => {
    try {
        return await Event.findAll({
            where: filters,
            include: getAssoc(Event),
        });
    } catch (error) {
        throw error;
    }
};

const storeEvent = async (body) => {
    try {
        const newEvent = await Event.create(body);

        return newEvent;
    } catch (error) {
        throw error;
    }
};

const updateEvent = async (id, params) => {
    try {
        params.updatedBy = 1;

        const event = await Event.findByPk(id);
        if (!event) {
            throw new CustomError(`No se pudo encontrar el evento ${id}`, 512);
        }

        event.set(params);

        return await event.save();
    } catch (err) {
        throw err;
    }
};

const deleteEvent = async (id, req) => {
    try {
        //Comprobación de argumento en ruta para borrado físico o lógico
        let force = false;

        if (req.query.forceDelete) {
            force = true;
        }

        const event = await Event.findByPk(id);
        if (!event) {
            throw new CustomError(`No se encontró el evento ${id}`, 520);
        }

        event.set({
            updatedBy: 1,
            deletedBy: 1
        });

        await event.save();
        await event.destroy({ force: force });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    updateEvent,
    getAllEvents,
    getEvent,
    storeEvent,
    deleteEvent,
    getEventsWithFilters
};
