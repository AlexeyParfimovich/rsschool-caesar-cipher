/*
  Create input and output streams in depend on recieved Path value
*/
const { W_OK } = require('constants');
const fs = require('fs');

exports.createReadable = function createReadable(path) {
  if( path === undefined) {
    return process.stdin;
  };
  return fs.createReadStream(path, {flags:'r'}).on('error', (err) => { 
    console.error('Input error', err.message);
    process.exit(1);
  });
};

exports.createWritable = function createWritable(path) {
  if( path === undefined) {
    return process.stdout;
  };
  try {
    fs.accessSync(path, fs.constants.W_OK);
    return fs.createWriteStream(path, {flags:'a'});  
  } catch(err) {
    console.error('Output error', err.message);
    process.exit(1);
  };
};