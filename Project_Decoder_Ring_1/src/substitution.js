function substitution(input, alphabet, encode = true) {
    //catching edge cases
    if(!input) return false
    if(!alphabet) return false
    if(alphabet.length!=26&&alphabet != String) return false
    let iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?"
    for(let i=0;i<alphabet.length;i++){
        //let iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?"
       if(iChars.indexOf(alphabet[i]) != -1) return false
        for(let j=i+1;j<alphabet.length;j++){
            if(alphabet[i]==alphabet[j]){
                return false
            }
        }
    }
    //sets default value for alphabet for encodeing
    let subAlphabet = {
        a:alphabet[0],b:alphabet[1],c:alphabet[2],d:alphabet[3],e:alphabet[4],
        f:alphabet[5],g:alphabet[6],h:alphabet[7],i:alphabet[8],j:alphabet[9],
        k:alphabet[10],l:alphabet[11],m:alphabet[12],n:alphabet[13],o:alphabet[14],
        p:alphabet[15],q:alphabet[16],r:alphabet[17],s:alphabet[18],t:alphabet[19],
        u:alphabet[20],v:alphabet[21],w:alphabet[22],x:alphabet[23],y:alphabet[24],z:alphabet[25],' ':' '
    }
    //inverts if decoding
    if(!encode){
        subAlphabet = {
            [alphabet[0]]:'a',[alphabet[1]]:'b',[alphabet[2]]:'c',[alphabet[3]]:'d',
            [alphabet[4]]:'e',[alphabet[5]]:'f',[alphabet[6]]:'g',[alphabet[7]]:'h',
            [alphabet[8]]:'i',[alphabet[9]]:'j',[alphabet[10]]:'k',[alphabet[11]]:'l',
            [alphabet[12]]:'m',[alphabet[13]]:'n',[alphabet[14]]:'o',[alphabet[15]]:'p',
            [alphabet[16]]:'q',[alphabet[17]]:'r',[alphabet[18]]:'s',[alphabet[19]]:'t',
            [alphabet[20]]:'u',[alphabet[21]]:'v',[alphabet[22]]:'w',[alphabet[23]]:'x',
            [alphabet[24]]:'y',[alphabet[25]]:'z',' ':' '
          }
    }

    
    
    return input.split('').map((char)=>{return subAlphabet[char.toLowerCase()];}).join('');
}

module.exports = substitution;
