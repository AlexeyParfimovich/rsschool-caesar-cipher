const fs = require('fs');

exports.createReadable = function createReadable(path) {
  if( path === undefined) {
    return process.stdin;
  };
  return fs.createReadStream(path, {flags:'r'}).on('error', (err) => { 
    throw(err.message);
  });
};

exports.createWritable = function createWritable(path) {
  if( path === undefined) {
    return process.stdout;
  };
  return fs.createWriteStream(path, {flags:'a'}).on('error', (err) => { 
    throw(err.message);
  });
};