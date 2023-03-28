const cipher = {
  encode: function(offset_value1,cipherMessage){
    
    let result = '';
    for (let index = 0; index < cipherMessage.length; index++) {
      
      const valueASCII = cipherMessage[index].charCodeAt();
      if (valueASCII >=65 && valueASCII<=90){
        result += String.fromCharCode(((valueASCII-65 + offset_value1)%26)+65);}
    } return result; 
  },
  decode: function(offsetValue2,decipherMessage){
    let result = '';
    for (let index = 0; index < decipherMessage.length; index++) {
      const valueASCII = decipherMessage[index].charCodeAt();
      if (valueASCII >=65 && valueASCII<=90){
        result += String.fromCharCode(((valueASCII-65 - offsetValue2 + 26)%26)+65);}  
    } return result;  
  }
}
  



export default cipher;
 