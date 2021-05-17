# rsschool-caesar-cipher
Nodejs Caesar cipher CLI tool

Implement CLI tool that will encode and decode a text by https://en.wikipedia.org/wiki/Caesar_cipher

## Prerequisites:
1. Install Node.js
2. Dowload this repository: https://github.com/AlexeyParfimovich/rsschool-caesar-cipher/archive/refs/heads/dev.zip
3. Unzip downloaded archive into a folder on you local storage
4. Go to the unzipped folder 
5. Run `npm install` to install all dependencies
6. Run `node cctool [-options]`

### CLI tool options (short alias and full name):
- -a, --action <type>   : an action encode/decode
- -s, --shift <number>  : a shift value
- -i, --input <path>    : an input file
- -o, --output <path>   : an output file
- -h, --help            : display help for command

> Press Ctrl^C to stop the application if it was started without specified input file

## Options details:

- Оptions parameters are specified separated by a spaces without additional characters (=,>, etc.)
- Action (`-a, --action <type>`) and the Shift (`-s, --shift <number>`) are required;
- If the Input (`-i, --input`) is missed - Stdin is used as an input source;
- If the Output (`-o, --output`) is missed - Stdout is used as an output destination;
- If passed params are fine the Output (file or stdout) сontains encoded/decoded content of Input (file or stdin);
- For encoding/decoding only the English alphabet is used, all other characters keet untouched;
- The tool works correctly with any integer values of Shift (`-s, --shift`).

## Usage example:

### -a (--action) is encode
`$ node cctool -a encode -s 7 -i input.txt -o output.txt`

input.txt 
> This is secret. Message about "_" symbol!

output.txt 
> Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

`$ node cctool --action encode --shift 7 --input input.txt --output otput.txt`

plain.txt 
> This is secret. Message about "_" symbol!

encoded.txt 
> Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

### -a (--action) is decode 
(decoding encoded initial string with the same -s(--shift) number produces the initial string)
`$ node cctool -a decode -s 7 -i encoded.txt -o plain.txt`

encoded.txt 
> Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

plain.txt 
> This is secret. Message about "_" symbol!

### Negative shift handling
`$ node cctool -a encode -s -1 -i input.txt -o output.txt`

input.txt
> This is secret. Message about "_" symbol!

output.txt 
> Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!
