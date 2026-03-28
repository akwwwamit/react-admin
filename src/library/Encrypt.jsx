import CryptoJS from "crypto-js";
let key = "123India@123";

function encryptJSON(data) {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    key
  ).toString();
}

function decryptJSON(cipherText) {
  const bytes = CryptoJS.AES.decrypt(cipherText, key);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

export {encryptJSON, decryptJSON};