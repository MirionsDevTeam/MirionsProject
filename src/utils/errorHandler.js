"use strict";
class CustomError extends Error {
    constructor(message,code) {
      super(`Se produjo el siguiente error: ${message}`);
      this.statusCode = (code) ? code : 500;
    }
  }
module.exports = () => CustomError;