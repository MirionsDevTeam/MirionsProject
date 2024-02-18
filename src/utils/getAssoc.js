"use strict";
const getAssoc = (model) => {
   
    const assoc = model.associations;
    const object=Object.keys(assoc);
   return object;
}

module.exports = getAssoc;