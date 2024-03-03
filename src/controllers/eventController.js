"use strict";

const eventService = require('../services/eventService');

const storeEvent = async (req,res,next) => {
    try{
       const newEvent =  await eventService.storeEvent(req.body);

        

        return res.status(201).send(`Evento ${newEvent.id} creado correctamente`);
    }catch (error){
        return res.status(500).json(`Se produjo el siguiente error: ${error.message}`);
    }
}

const updateEvent = async (req,res,next) => {
    try{
        const id= req.params.id;
        const body = req.body;
       const updatedEvent =  await eventService.updateEvent(id,body);

        

        return res.status(200).send(`Evento ${id} actualizado correctamente`);
    }catch (error){
        console.log(error);
        return res.status(error.statusCode).json(`Se produjo el siguiente error: ${error.message}`);
    }
}

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
    
        return res.status(200).json(event);
    } catch (err) {
     
        return res.status(err.statusCode).json(err.message);
    }


}

const deleteEvent = async(req,res,next) => {
    try{
      // console.log(req.params);
        const id = req.params.id;
       const respuesta = await eventService.deleteEvent(id,req);
       //return res.status(200).json(respuesta);
        return res.status(200).json(`El evento ${id} se ha eliminado correctamente`);
    }catch(err){
        return res.status(err.statusCode).json(err.message);
    }
}

const getEventsWithFilters =  async (req, res, next) => {
    try{
       // const body = req.body;
       const events = await eventService.getEventsWithFilters(req.body);
        return res.status(200).json(events);
    }catch(err){
        return res.status(err.statusCode).json(err.message);
       // return res.status(err.statusCode).json(err.message);
    }
}

module.exports = {
    storeEvent,
    getAllEvents,
    getEvent,
    updateEvent,
    deleteEvent,
    getEventsWithFilters
}