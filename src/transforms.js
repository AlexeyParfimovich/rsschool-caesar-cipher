/*
  Transform class with Caesar cipher encode/decode algorithm
*/
class СaesarCipherTransform extends require('stream').Transform {
  action = undefined;
  shift = undefined;

  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = shift;
  }

  _transform(chunk, encoding, callback) {
    // Set direction of the encryption process
    if(this.action === 'decode') this.shift = -this.shift;
    
    this.push(chunk.toString().replace(/[A-Za-z]/g, (ch) => {
      // Set offset of the charset :)
      const offset = (ch === ch.toUpperCase()) ? 65 : 97;
      // Calculate encripted/decripted code of a char
      let charCode = (ch.charCodeAt(0) - offset + this.shift) % 26;
      // Correct char's code depending on its sign
      if(charCode < 0) charCode += 26;
      // Return a char form its code
      return String.fromCharCode(charCode + offset);
    }));

    callback();
  }
};

exports.createCCTransform = (action, shift) => new СaesarCipherTransform(action, shift);