# rsschool-caesar-cipher
Nodejs Caesar cipher CLI tool

Implement CLI tool that will encode and decode a text by Caesar cipher.

CLI tool should accept 4 options (short alias and full name):

-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode

Details:

Basic Scope

Action (encode/decode) and the shift are required, 
If the input file is missed - use stdin as an input source.
If the output file is missed - use stdout as an output destination.

If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - human-friendly error will be printed in stderr.

If passed params are fine the output (file or stdout) сontains encoded/decoded content of input (file or stdin).

For encoding/decoding use only the English alphabet, all other characters keep untouched.

The tool works correctly with any integer values of shift (-s, --shift).


Usage example:

-a (--action) is encode
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
input.txt This is secret. Message about "_" symbol!

output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
plain.txt This is secret. Message about "_" symbol!

encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

-a (--action) is decode
Decoding encoded initial string with the same -s(--shift) number produces the initial string.
$ node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

plain.txt This is secret. Message about "_" symbol!

(Optional) Negative shift handling
$ node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
plain.txt This is secret. Message about "_" symbol!

encoded.txt Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!