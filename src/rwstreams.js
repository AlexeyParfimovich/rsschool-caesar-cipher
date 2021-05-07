/*
  Create input and output streams in depend on recieved Path value
*/
const { W_OK } = require('constants');
const fs = require('fs');

exports.createReadable = (path) => (path === undefined) ? process.stdin : fs.createReadStream(path, {flags:'r'});

exports.createWritable = (path) => {
  if( path === undefined) {
    return process.stdout;
  };
  fs.accessSync(path, fs.constants.W_OK);
  return fs.createWriteStream(path, {flags:'a'});  
};