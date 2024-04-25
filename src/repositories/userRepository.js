"use strict";
const { User } = require('../models');
const getAssoc = require('../utils/getAssoc');
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

const getUsersWithFilters = async (filters) => {
    try {
        return await User.findAll({
            where: filters,
            include: getAssoc(User),
        });
    } catch (error) {
        throw error;
    }
};

const storeUser = async (body) => {
    try {
        const newUser = await User.create(body);

        return newUser;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (id, body) => {
    try {
        body.updatedBy = 1;

        const user = await User.findByPk(id);
        if (!user) {
            throw new CustomError(`No se pudo encontrar el usuario ${id}`, 512);
        }

        User.set(body);

        return await User.save();
    } catch (err) {
        throw err;
    }
};

const deleteUser = async (id, req) => {
    try {
        
        let force = false;

        //Comprobación de borrado físico o lógico
        if (req.query.forceDelete) {
            force = true;
        }

        const user = await User.findByPk(id);
        if (!user) {
            throw new CustomError(`No se encontró el usuario ${id}`, 520);
        }

        User.set({
            updatedBy: 1,
            deletedBy: 1
        });

        await User.save();
        await User.destroy({ force: force });
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
};

