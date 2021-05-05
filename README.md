# rsschool-caesar-cipher
Nodejs Caesar cipher CLI tool

Implement CLI tool that will encode and decode a text by https://en.wikipedia.org/wiki/Caesar_cipher

Prerequisites:
1. Install Node.js
2. Dowload this repository: https://github.com/AlexeyParfimovich/rsschool-caesar-cipher/archive/refs/heads/dev.zip
3. Unzip downloaded archive into a folder on you local storage
4. Go to the unzipped folder 
5. To install all dependencies use npm install
6. Run npm cctool [-options] in command line

CLI tool accepts 4 options (short alias and full name):

-a, --action <type>   : an action encode/decode
-s, --shift <number>  : a shift value
-i, --input <path>    : an input file
-o, --output <path>   : an output file
-h, --help            : display help for command

Options details:

- Action (encode/decode) and the Shift are required;
- If the input file is missed - Stdin is used as an input source;
- If the output file is missed - Stdout is used as an output destination;
- If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - human-friendly error will be printed in stderr;
- If passed params are fine the output (file or stdout) сontains encoded/decoded content of input (file or stdin);
- For encoding/decoding use only the English alphabet, all other characters keep untouched;
- The tool works correctly with any integer values of Shift (-s, --shift).

Usage example:

-a (--action) is encode
$ node cctool -a encode -s 7 -i input.txt -o output.txt

input.txt 
This is secret. Message about "_" symbol!
output.txt 
Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

$ node cctool --action encode --shift 7 --input plain.txt --output encoded.txt

plain.txt 
This is secret. Message about "_" symbol!
encoded.txt 
Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

-a (--action) is decode
Decoding encoded initial string with the same -s(--shift) number produces the initial string.

$ node cctool --action decode --shift 7 --input encoded.txt --output plain.txt

encoded.txt 
Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!
plain.txt 
This is secret. Message about "_" symbol!

(Optional) Negative shift handling

$ node cctool --action encode --shift -1 --input plain.txt --output encoded.txt

plain.txt
This is secret. Message about "_" symbol!
encoded.txt 
Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!