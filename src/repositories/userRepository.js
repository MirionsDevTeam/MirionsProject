"use strict";
const { User } = require('../models');
const getAssoc = require('../utils/getAssoc');
const getAllUsers = async () => {
    try {
        
        return User.findAll({
            include: getAssoc(User)
        });
    } catch(err){
        throw err;
    }
}

const getUser = async(id) => {
    try {
        
        return User.findByPk(id,{
            include: getAssoc(User)
        });
    } catch(err){
        throw err;
    }
}

const getUserByMail = async(mail) => {
    try{
        return User.findOne({ where: { email: mail } },{
            include: getAssoc(User)
        });
    } catch(err){
        throw err;
    }
}

module.exports = {
    getAllUsers, 
    getUser,
    getUserByMail,
};


