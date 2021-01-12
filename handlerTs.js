'use strict';
const { helloTs } = require('hello_ts_layer');

module.exports.hello = async(event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        message: helloTs(),
        input: event,
      },
      null,
      2
    ),
  };
};