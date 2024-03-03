"use strict";

const eventRepository = require('../repositories/eventRepository');


const storeEvent = async (body) => {
    try{
        return await eventRepository.storeEvent(body);
    }catch(err){
        throw err;
    }
}





const updateEvent = async (id,body) => {
    try{
        return await eventRepository.updateEvent(id,body);
    }catch(err){
        throw err;
    }
}

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

const deleteEvent = async(id,req) => {
    try{
       return await eventRepository.deleteEvent(id,req);
    } catch(error){
        throw error;
    }
}

const getEventsWithFilters = async(body) => {
    try{
        return await eventRepository.getEventsWithFilters(body);
     } catch(error){
         throw error;
     }
}

module.exports = {
    getAllEvents,
    getEvent,
    storeEvent,
    updateEvent,
    deleteEvent,
    getEventsWithFilters
}