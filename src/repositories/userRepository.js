"use strict";
const { User } = require('../models');

const createUser = async (req,res,next) => {

}

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
        
        const user = User.findByPk(id,{
            include: getAssoc(User)
        });
       
        return user;
    } catch(err){
        throw err;
    }
}
module.exports = {
    getAllUsers, 
    getUser
};


