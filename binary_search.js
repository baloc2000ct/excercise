
 let arr = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(){

   
      /**  for (let i = 0; i < arr.length; i++){
           console.log(i)
           if(val === arr[i]){
               return i;
           }
       }
       return -1;*/

       let lower = 0;
       let upper = arr.length -1;
       let val = document.forms["input_form3"]["val"].value;

     
       
    while(lower <= upper){

        let middle = lower + Math.floor((upper + lower)/2);

        if(val === arr[middle]){
             outputText ="Present" + middle;
            break;
        }
        else if(val > arr[middle]){
            lower = middle + 1;
            
        }else
        {
            upper =middle - 1;    
        }
         outputText =" Can find any number like this in array!"
    }

     document.getElementById("output_text3").innerHTML = outputText;
     
     
}

binarySearch();


