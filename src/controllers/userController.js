"use strict";
const userService = require('../services/userService');


const getAllUsers = async (_req, res, _next) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error al recuperar los usuarios');
    }
};

const getUser = async (req, res, _next) => {
    try {
        const user = await userService.getUser(req.params.id);

        if (user) {
            return res.status(200).json(user);
        }

        return res.status(404).send(`Usuario ${req.params.id} no encontrado`);
    } catch (err) {
        console.err(err);
        return res.status(500).send('Error al recuperar el usuario');
    }
}

const getUserByMail = async (req, res, next) => {
    try {
        const user = await userService.getUserByMail(req.params.mail);
        if (user) {
            return res.status(200).json(user);
        }
        return res.status(404).send(`Usuario ${req.params.mail} no encontrado`);
    } catch (err) {
        console.err(err);
        return res.status(500).send('Error al recuperar el usuario');
    }    

    
}

const getUsersWithFilters = async (req, res, _next) => {
    try {
        const users = await userService.getUsersWithFilters(req.body);

        return res.status(200).json(users);
    } catch (err) {
        return res.status(err.statusCode).send(err.message);
    }
};

const storeUser = async (req, res, _next) => {
    try {
        const newUser = await userService.storeUser(req.body);

        return res.status(201).send(`Usuario ${newUser.id} creado correctamente`);
    } catch (error) {
        return res.status(500).send(`Se produjo el siguiente error: ${error.message}`);
    }
};

const updateUser = async (req, res, _next) => {
    try {
        const id = req.params.id;
        const body = req.body;

        await userService.updateUser(id, body);

        return res.status(200).send(`Usuario ${id} actualizado correctamente`);
    } catch (error) {
        return res.status(error.statusCode).send(`Se produjo el siguiente error: ${error.message}`);
    }
};

const deleteUser = async (req, res, _next) => {
    try {
        const id = req.params.id;
        await userService.deleteUser(id, req);

        return res.status(200).send(`El usuario ${id} se ha eliminado correctamente`);
    } catch (err) {
        return res.status(err.statusCode).send(err.message);
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