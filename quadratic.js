//quadratic equation
function quadratic() {
let valid1, valid2;
var outputText;
//input a, b, c
let a = document.forms["input_form"]["aterm"].value;
let b = document.forms["input_form"]["bterm"].value;
let c = document.forms["input_form"]["cterm"].value;;

//delta
let delta = b * b - 4 * a * c ;


// condition
if (delta > 0){
    valid1 =(-b + Math.sqrt(delta)/ (2 * a));
    valid2 = (-b - Math.sqrt(delta)) / (2 * a);


    outputText = `The valid of quadratic equation are ${valid1} and ${valid2}`;
}

else if(delta == 0)
{
    valid1 = valid2 = -b /(2*a);
    outputText =`The valid of quadratic equation are ${valid1} and ${valid2}`;
}
else 
{
    outputText ='Quadratic equation has no solution';
}
document.getElementById("output_text").innerHTML = outputText;
}
quadratic();
