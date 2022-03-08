function pascal()
    {
        let outputText;
        let vp =parseInt(document.forms["input_form5"]["vp"].value);
        let currentLine = [1];
        

        let LineSize = vp +1 ;
        
        console.log(LineSize)
        for (let i = 1; i < LineSize; i++ ) {
           
            currentLine[i] = (currentLine[i - 1] * (vp - i + 1)) / i;
           
          }
          outputText =currentLine;
          
       
            
          
        document.getElementById("output_text5").innerHTML = outputText;
        
    
    }
     
    
 
 


   