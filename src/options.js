/*
  Parse CLI argumets to program options
*/
const actionType = ['encode','decode'];

const comander = require('commander');
const program = new comander.Command();

program
  .description('Nodejs Caesar cipher CLI tool')
  .requiredOption('-a, --action <type>', `an action ${actionType.join('/')}`, parseAction)
  .requiredOption('-s, --shift <number>', 'a shift value', parseShift)
  .option('-i, --input <path>', 'an input file', parseOption)
  .option('-o, --output <path>', 'an output file', parseOption);

//if(process.argv.length < 3) program.help();

exports.options = program.parse().opts();

/*
  functions for parsing command line argument values
*/
function parseAction(value) {
  const parsedValue = value.toLowerCase().replace(/=/,'');
  if(actionType.indexOf(parsedValue) < 0) {
    throw new comander.InvalidOptionArgumentError(`${actionType.join('/')} expected`);
  }
  return parsedValue;
}

function parseShift(value) {
  const parsedValue = parseInt(value.replace(/=/,''),10);
  if(isNaN(parsedValue)){
    throw new comander.InvalidOptionArgumentError('Integer number expected');
  }
  return parsedValue;
}

function parseOption(value) {
  return value.replace(/=/,'');
}