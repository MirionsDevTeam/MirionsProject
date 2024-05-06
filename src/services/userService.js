"use strict";

const userRepository = require('../repositories/userRepository');

const getAllUsers = async () => {
    try{
        return await  userRepository.getAllUsers();
    }catch(err){
        throw err;
    }
};

const getUser = async (id) =>{
    try{
        return await userRepository.getUser(id);
    }catch(err){
        throw err;
    }
}

const getUserByMail = async (mail) =>{
    try{
        return await userRepository.getUserByMail(mail);
    }catch(err){
        throw err;
    }
}

const getUsersWithFilters = async (filters) => {
    try {
        return await userRepository.getUsersWithFilters(filters);
    } catch (error) {
        throw error;
    }
};

const storeUser = async (newUser) => {
    try {
        return await userRepository.storeUser(newUser);
    } catch (err) {
        throw err;
    }
};

const updateUser = async (id, updateUser) => {
    try {
        return await userRepository.updateUser(id, updateUser);
    } catch (err) {
        throw err;
    }
};

const deleteUser = async (id, requestParams) => {
    try {
        return await userRepository.deleteUser(id, requestParams);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllUsers,
    getUser,
    getUserByMail,
    getUsersWithFilters,
    storeUser,
    updateUser,
    deleteUser
}