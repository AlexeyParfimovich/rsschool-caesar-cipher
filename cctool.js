const comander = require('commander');
const program = new comander.Command();

/*
  Parsing command line arguments
*/
function parseAction(value) {
  const parsedValue = value.toLowerCase();
  if(parsedValue !== 'encode' && parsedValue !== 'decode') {
    throw new comander.InvalidOptionArgumentError('Encode/decode expected');
  }
  return parsedValue;
}

function parseShift(value) {
  const parsedValue = parseInt(value,10);
  if(isNaN(parsedValue)){
    throw new comander.InvalidOptionArgumentError('Integer number expected');
  }
  return parsedValue;
}

const options = program
  .description('Nodejs Caesar cipher CLI tool')
  .requiredOption('-a, --action <type>', 'an action encode/decode', parseAction)
  .requiredOption('-s, --shift <number>', 'a shift value', parseShift)
  .option('-i, --input <path>', 'an input file')
  .option('-o, --output <path>', 'an output file')
  .parse()
  .opts();

//console.log(options);

class СaesarCipherTransform extends require('stream').Transform {
  action = undefined;
  shift = undefined;

  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = shift;
  }

  _transform(chunk, encoding, callback) {
    // Code to encode/decode chunk of text
    this.push(`action = ${this.action}, `);
    this.push(`shift = ${this.shift}\n`);
    this.push(chunk.toString().toUpperCase());
    callback();
  }
};

const transform = new СaesarCipherTransform(options.action, options.shift);

// process.stdin.on('data', () => {
//   process.stdin.read();
// });
//
// process.stdin.on('end', () => {
//   process.stdout.write('end!!!');
// });
//
//process.stdin.pipe(transform).pipe(process.stdout);

const readable = process.stdin;
const writabe = process.stdout;

const { pipeline } = require('stream');
pipeline(
  readable,
  transform,
  writabe,
  (err) => { console.error('error', err) },
);