let arr = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(){

   
      /**  for (let i = 0; i < arr.length; i++){
           console.log(i)
           if(val === arr[i]){
               return i;
           }
       }
       return -1;*/
       let outputText;
       let lower = 0;
       let upper = arr.length -1;
       let val =  parseInt(document.forms["input_form3"]["val"].value);

     
       
    while(lower <= upper){

        let middle = Math.floor((upper + lower)/2);
        if(val === arr[middle]){
            outputText ="Present number " + val + " at position " + middle + " in array";
            break;
        }
        else if(val > arr[middle]){
            lower = middle + 1;
            
        }else
        {
            upper =middle - 1;    
        }       
        outputText =" Can't find any number like this in array!";
    }
     document.getElementById("output_text3").innerHTML = outputText;
     
     
}
