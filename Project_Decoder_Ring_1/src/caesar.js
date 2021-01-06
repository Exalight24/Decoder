function caesar(input, shift, encode = true) {
  if(!input) return false
  let inputs = input.toLowerCase()  
  let shifter = shift
//checks if shift is proper value
   if(shift===undefined||shift === 0||shift>25||shift<-25) {
      return false
    }
    //reverses shift when decoding cipher
    if(!encode){
      shifter = shift * -1
  }
    //ensures input is actually given
    
      let output = "";
    for (let i = 0; i < inputs.length; i++) {
       let c = inputs[i];
        if (c.match(/[a-z]/i)) {
          let code = inputs.charCodeAt(i);
            
            c = String.fromCharCode(((code - 97 + shifter+ 26) % 26) + 97);
          
        }
        output += c;
      }
      return output;

    
}

module.exports = caesar;
