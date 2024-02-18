"use strict";
const { Event } = require('../models');
const getAllEvents = async () => {
    try {
        
        return Event.findAll({
            include: getAssoc(Event)
        });
    } catch(err){
        throw err;
    }
}

const getEvent = async(id) => {
    try {
        
        return Event.findByPk(id,{
            include: getAssoc(Event)
        });
    } catch(err){
        throw err;
    }
}
module.exports = {
    getAllEvents, 
    getEvent
};


