"use strict";
const userService = require('../services/userService');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error al recuperar los usuarios');
    }
}

const getUser = async (req, res, next) => {
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

module.exports = {
    getAllUsers,
    getUser
}