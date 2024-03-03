"use strict";
const { Event } = require('../models');


const storeEvent = async (body) => {
    try {
        const {
            title,
            description,
            provincia,
            city,
            address,
            location,
            eventType,
            minGuests,
            maxGuests,
            observations,

        } = body;

        const newEvent = await Event.create({
            title: title,
            description: description,
            provincia: provincia,
            city: city,
            address: address,
            location: location,
            eventType: eventType,
            minGuests: minGuests,
            maxGuests: maxGuests,
            observations: observations,
            createdBy: 1,
            updatedBy: 1,

        });
        return newEvent;
    } catch (error) {
        throw error

    }
}
const updateEvent = async (id, body) => {
    try {
        const {
            title,
            description,
            provincia,
            city,
            address,
            location,
            eventType,
            minGuests,
            maxGuests,
            observations,

        } = body;

        var params = [];

        if (title) {
            params.title = title;
        }


        if (description) {
            params.description = description;
        }
        if (provincia) {
            params.provincia = provincia;
        }
        if (city) {
            params.city = city;
        }
        if (address) {
            params.address = address;
        }
        if (location) {
            params.location = location;
        }
        if (eventType) {
            params.eventType = eventType;
        }
        if (minGuests) {
            params.minGuests = minGuests;
        }
        if (maxGuests) {
            params.maxGuests = maxGuests;
        }
        if (observations) {
            params.observations = observations;
        }
        params.updatedBy = 1;
        const event = await Event.findByPk(id);
        if (!event) {
            throw new CustomError(`No se pudo encontrar el evento ${id}`, 512);
        }


        event.set(params);
        await event.save();
        return event;
    } catch (err) {
        throw err;
    }

}
const getAllEvents = async () => {
    try {

        return Event.findAll({
            include: getAssoc(Event)
        });
    } catch (err) {
        throw err;
    }
}

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
}

const getEventsWithFilters = async (body) => {
    const {
        title,
        date,
        description,
        provincia,
        city,
        address,
        location,
        eventType,
        minGuests,
        maxGuests,
        observations,

    } = body;
    
    try {
        let filters = {};

        if (title) {
            filters.title = title;
        }

        if (date) {
            filters.date = date;
        }

        if (description) {
            filters.description = description;
        }

        if (provincia) {
            filters.provincia = provincia;
        }

        if (city) {
            filters.address = address;
        }

        if (location) {
            filters.location = location;
        }

        if (eventType) {
            filters.eventType = eventType;
        }

        if(minGuests){
            filters.minGuests=minGuests;
        }

        if(maxGuests){
            filters.maxGuests = maxGuests;
        }       

        if(observations){
            filters.observations = observations;
        }
        const events = await Event.findAll({

            where: filters,
            include: getAssoc(Event),
        });
     
        return events;
    } catch (error) {
        throw error;
        
    }

}

const deleteEvent = async (id, req) => {



    try {
      

        //Comprobación de argumento en ruta para borrado físico o lógico
        let force = false;
        if (req.query.forceDelete == "true") {
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
        return event;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    updateEvent,
    getAllEvents,
    getEvent,
    storeEvent,
    deleteEvent,
    getEventsWithFilters
};


