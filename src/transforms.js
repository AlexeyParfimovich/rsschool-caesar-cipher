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
    //this.push(`${this.action}d with shift on ${this.shift}:\n`);

    if(this.action === 'decode') this.shift = -this.shift;
    
    this.push(chunk.toString().replace(/[A-Za-z]/g, (ch) => {
      if(ch === ch.toUpperCase()){
        if(this.shift >= 0) return String.fromCharCode((ch.charCodeAt(0) - 65 + this.shift) % 26 + 65);
        else {
          const code = (ch.charCodeAt(0) - 65 + this.shift) % 26;
          if(code >= 0) return String.fromCharCode(code + 65);
          else return String.fromCharCode(code + 26 + 65);
        }  
      } else {
        if(this.shift >= 0) return String.fromCharCode((ch.charCodeAt(0) - 97 + this.shift) % 26 + 97);
        else {
          const code = (ch.charCodeAt(0) - 97 + this.shift) % 26;
          if(code >= 0) return String.fromCharCode(code + 97);
          else return String.fromCharCode(code + 26 + 97);
        }
      } 
    }));

    callback();
  }
};

exports.createCCTransform = function createCCTransfrom(action, shift) {
  return new СaesarCipherTransform(action, shift)
};
