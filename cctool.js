const options = require('./src/options').options;
//console.log(options);

//console.log('Trying to create Input stream:');
const readable = require('./src/rwstreams').createReadable(options.input);

//console.log('Trying to create Output stream:');
const writable = require('./src/rwstreams').createWritable(options.output);

//console.log('Trying to create Transform stream:');
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