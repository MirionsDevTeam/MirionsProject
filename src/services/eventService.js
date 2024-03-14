"use strict";

const eventRepository = require('../repositories/eventRepository');

const getAllEvents = async () => {
    try {
        return await eventRepository.getAllEvents();
    } catch (err) {
        throw err;
    }
};

const getEvent = async (id) => {
    try {
        return await eventRepository.getEvent(id);
    } catch (err) {
        throw err;
    }
};

const getEventsWithFilters = async (filters) => {
    try {
        return await eventRepository.getEventsWithFilters(filters);
    } catch (error) {
        throw error;
    }
};

const storeEvent = async (newEvent) => {
    try {
        return await eventRepository.storeEvent(newEvent);
    } catch (err) {
        throw err;
    }
};

const updateEvent = async (id, updateEvent) => {
    try {
        return await eventRepository.updateEvent(id, updateEvent);
    } catch (err) {
        throw err;
    }
};

const deleteEvent = async (id, requestParams) => {
    try {
        return await eventRepository.deleteEvent(id, requestParams);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllEvents,
    getEvent,
    getEventsWithFilters,
    storeEvent,
    updateEvent,
    deleteEvent
};
