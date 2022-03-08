function caeser() {
   
    let str =document.forms["input_form6"]["ca"].value;
    let outputText;
    
        //Deciphered reference letters
        let decoded = {
          A: 'N', B: 'O', C: 'P',
          D: 'Q', E: 'R', F: 'S',
          G: 'T', H: 'U', I: 'V',
          J: 'W', K: 'X', L: 'Y',
          M: 'Z', N: 'A', O: 'B',
          P: 'V', Q: 'D', R: 'E',
          S: 'F', T: 'G', U: 'H',
          V: 'I', W: 'J', X: 'K',
          Y: 'L', Z: 'M'    
        }
        
        
        //convert the string to lowercase
        str = str.toUpperCase();
        
        //decipher the code
        let decipher = '';
        for(let i = 0 ; i < str.length; i++){

          decipher += decoded[str[i]];
        }
        
        //return the output
        outputText ="Encode: " + decipher;
        document.getElementById("output_text6").innerHTML = outputText;

        
      
  };

  function decaeser() {
   
    let str =document.forms["input_form7"]["de"].value;
    let outputText;
    
        //Deciphered reference letters
        let decoded = {
          N: 'A', O: 'B', P: 'C',
          Q: 'D', R: 'E', S: 'F',
          T: 'G', U: 'H', V: 'I',
          W: 'J', X: 'K', Y: 'L',
          Z: 'M', A: 'N', B: 'O',
          V: 'P', D: 'Q', E: 'R',
          F: 'S', G: 'T', H: 'U',
          I: 'V', J: 'W', K: 'X',
          L: 'Y', M: 'Z'    
        }
        
        //convert the string to lowercase
        str = str.toUpperCase();
        
        //decipher the code
        let decipher = '';
        for(let i = 0 ; i < str.length; i++){

          decipher += decoded[str[i]];
        }
        
        //return the output
        outputText ="Decode: " + decipher;
        document.getElementById("output_text7").innerHTML = outputText;

        
      
  };
  