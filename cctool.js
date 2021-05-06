/*
  Implementation of the Caesar cipher algorithm to encode/decode input to output chars streams managing by CLI options
*/
const options = require('./src/options').options;
//console.log(options);

const readable = require('./src/rwstreams').createReadable(options.input);

const writable = require('./src/rwstreams').createWritable(options.output);

const transform = require('./src/transforms').createCCTransform(options.action, options.shift);

const { pipeline } = require('stream');
pipeline(
  readable,
  transform,
  writable,
  (err) => {
    if (err) {
      console.error('Process failed.', err);
    } else {
      console.log('Process succeeded.');
    }
  }
);