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

console.log(options);