"use strict";
const { User } = require('../models');

const getAllUsers = async () => {
    try {
        return User.findAll({
            include: getAssoc(User)
        });
    } catch (err) {
        throw err;
    }
};

const getUser = async (id) => {
    try {
        return User.findByPk(id, {
            include: getAssoc(User)
        });
    } catch (err) {
        throw err;
    }
};

module.exports = {
    getAllUsers,
    getUser
};

