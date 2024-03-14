"use strict";

const getAssoc = (model) => {
    const assoc = model.associations;

    return Object.keys(assoc);
};

module.exports = getAssoc;
