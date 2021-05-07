/*
  Implementation of the Caesar cipher algorithm to encode/decode input to output chars streams managing by CLI options
*/
const pipeline = require('util').promisify(require('stream').pipeline);

const options = require('./src/options').options;
const createReadable = require('./src/rwstreams').createReadable;
const createWritable = require('./src/rwstreams').createWritable;
const createTransform = require('./src/transforms').createCCTransform;

(async (options) => {
  await pipeline(
    createReadable(options.input),
    createTransform(options.action, options.shift),
    createWritable(options.output))
})(options).catch((err) => {
  process.exitCode = 1;
  console.error('Error:',err.message)
});