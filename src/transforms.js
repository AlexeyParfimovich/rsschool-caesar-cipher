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
    this.push(`${this.action}d with shift on ${this.shift}:\n`);
    this.push(chunk.toString().toUpperCase());
    callback();
  }
};

exports.createCCTransform = function createCCTransfrom(action, shift) {
  return new СaesarCipherTransform(action, shift)
};
