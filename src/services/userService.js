"use strict";

const userRepository = require('../repositories/userRepository');

const getAllUsers = async () => {
    try{
    return await  userRepository.getAllUsers();
    }catch(err){
        throw err;
    }
}

const getUser = async (id) =>{
    try{
    return await userRepository.getUser(id);
    }catch(err){
        throw err;
    }
}

module.exports = {
    getAllUsers,
    getUser
}