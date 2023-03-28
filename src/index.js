//import cipher from './cipher.js';
//Declaro mis constantes
const main_body = document.querySelector('.main_body');
const select_cipher = document.querySelector('.select_cipher');
const select_decipher = document.querySelector('.select_decipher');
const cipher_body = document.querySelector('.cipher_body');
const decipher_body = document.querySelector('.decipher_body');
const btnReturn1 = document.querySelector('.return1');
const btnReturn2 = document.querySelector('.return2');

cipher_body.style.display = 'none';
decipher_body.style.display = 'none';

const goToCipher = (e) => {
    e.preventDefault()
    main_body.style.display = 'none'
    decipher_body.style.display = 'none'
    cipher_body.style.display = 'block'
  }
const goToDecipher = (e) => {
    e.preventDefault()
    main_body.style.display = 'none'
    cipher_body.style.display = 'none'
    decipher_body.style.display = 'block'
  } 
  select_cipher.addEventListener('click', goToCipher);
  select_decipher.addEventListener('click', goToDecipher);
const btnReturn = () => {
    cipher_body.style.display = 'none'
    decipher_body.style.display = 'none'
    main_body.style.display = 'block'
  }
  btnReturn1.addEventListener('click', btnReturn)
  btnReturn2.addEventListener('click', btnReturn)

const btn_cipher = document.getElementById('btn_cipher');
const offset_value1 = document.getElementById('range1')
const cipherResult = document.getElementById('result1');


function encode(offsetValue1,cipherMessage) {
    let result = '';
    for (let index = 0; index < cipherMessage.length; index++) {
    const valueASCII = cipherMessage[index].charCodeAt();
    if (valueASCII >=65 && valueASCII<=90){result += String.fromCharCode(((valueASCII-65 + offsetValue1)%26)+65);}  } return result; 
}

btn_cipher.addEventListener("click", (e) => { 
 e.preventDefault();
    const offsetValue1 = parseInt(offset_value1.value);
    const cipherMessage = document.getElementById('original_input1').value;
  cipherResult.value = encode(offsetValue1,cipherMessage);
  });


const btn_decipher = document.getElementById('btn_decipher');  
const offset_value2 = document.getElementById('range2');
const decipherResult = document.getElementById('result2');    

  
function decode(offsetValue2,decipherMessage) {
    let result = '';
    for (let index = 0; index < decipherMessage.length; index++) {
    const valueASCII = decipherMessage[index].charCodeAt();
    if (valueASCII >=65 && valueASCII<=90){result += String.fromCharCode(((valueASCII-65 - offsetValue2 + 26)%26)+65);}  
        } return result; 
}


btn_decipher.addEventListener("click", (e) => { 
 e.preventDefault();
    const offsetValue2 = parseInt(offset_value2.value);
    const decipherMessage = document.getElementById('original_input2').value; 
  decipherResult.value = decode(offsetValue2,decipherMessage);
 });













