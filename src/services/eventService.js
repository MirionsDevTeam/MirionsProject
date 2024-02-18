"use strict";

const eventRepository = require('../repositories/eventRepository');

const getAllEvents = async () => {
    try{
    return await  eventRepository.getAllEvents();
    }catch(err){
        throw err;
    }
}

const getEvent = async (id) =>{
    try{
    return await eventRepository.getEvent(id);
    }catch(err){
        throw err;
    }
}

module.exports = {
    getAllEvents,
    getEvent
}