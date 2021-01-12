'use strict';
const { helloJs } = require('hello_js_layer');

module.exports.hello = async(event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        message: helloJs(),
        input: event,
      },
      null,
      2
    ),
  };
};