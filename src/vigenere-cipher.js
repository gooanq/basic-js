const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.ALPHABET_LENGTH = this.ALPHABET.length;
  }

  encrypt(input, key) {
    if (!input || !key) throw Error("error");
    const length = input.length;

    const message = this.mode ? input.toUpperCase() : input.split("").reverse().join("").toUpperCase();
    const tmpKey = key.repeat(Math.ceil(message.length / key.length)).substr(0, message.length).toUpperCase()

    let newKey = "";
    for (let i = 0, j = 0; i < length; i++) {
      if (this.ALPHABET.indexOf(message[i]) === -1) {
        newKey += message[i];
      } else {
        newKey += tmpKey[j];
        j++;
      }
    }

    let encryptedMessage = "";
    for (let i = 0; i < length; i++) {

      if (this.ALPHABET.indexOf(message[i]) === -1) {
        encryptedMessage += message[i];
      }
      else {
        const encryptedCharCode = this.ALPHABET.indexOf(message[i]) + this.ALPHABET.indexOf(newKey[i]);
        if (encryptedCharCode < this.ALPHABET_LENGTH) {
          encryptedMessage += this.ALPHABET[encryptedCharCode];
        } else {
          encryptedMessage += this.ALPHABET[encryptedCharCode - this.ALPHABET_LENGTH];
        }
      }

    }
    return encryptedMessage;
  }

  decrypt(input, key) {
    if (!input || !key) throw Error("error");
    const length = input.length;

    const message = this.mode ? input.toUpperCase() : input.split("").reverse().join("").toUpperCase();
    const tmpKey = key.repeat(Math.ceil(message.length / key.length)).substr(0, message.length).toUpperCase()

    let newKey = "";
    for (let i = 0, j = 0; i < length; i++) {
      if (this.ALPHABET.indexOf(message[i]) === -1) {
        newKey += message[i];
      } else {
        newKey += tmpKey[j];
        j++;
      }
    }

    let result = "";
    for (let i = 0; i < length; i++) {

      if (this.ALPHABET.indexOf(message[i]) === -1) {
        result += message[i];
      }
      else {
        const encryptedCharCode = this.ALPHABET.indexOf(message[i]) - this.ALPHABET.indexOf(newKey[i]);
        if (encryptedCharCode >= 0) {
          result += this.ALPHABET[encryptedCharCode];
        } else {
          result += this.ALPHABET[encryptedCharCode + this.ALPHABET_LENGTH];
        }
      }
    }

    return result;
  }
}

module.exports = VigenereCipheringMachine;


