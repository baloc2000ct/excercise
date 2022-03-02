function cubic()
{
var valid1, valid2, valid3;
var outputText;
//input a, b, c, d
var a = document.forms["input_form1"]["a"].value;
var b = document.forms["input_form1"]["b"].value;
var c = document.forms["input_form1"]["c"].value;
var d = document.forms["input_form1"]["d"].value;

//delta
var delta = b * b - 3 * a * c ;

//compact variable

var r = 9 * a * b * c - 2 * b * b * b - 27 * a * a * d;

var q =2 * (Math.sqrt(Math.pow(Math.abs(delta),3)));

var s = 2 *(Math.sqrt(delta)) ;

var k = (r) /(2 * q);

var t = Math.acos(k)/3;

var bi = (2*Math.PI) / 3;

var o =  Math.pow(Math.abs(k)+(k * k)-1 , 1/3);

var p = Math.pow(Math.abs(k)-(k * k)-1 , 1/3);

var i = Math.pow( k + (Math.pow(k, 2)+1) ,1/3);

var u = Math.pow( k - (Math.pow(k, 2)+1) ,1/3);
if (a == 0)
{
    outputText = `Equation has no solution, please enter a ≠ 0`
}
else if(delta > 0)
{
    if(Math.abs(k) <= 1){
        valid1 = (s * Math.cos(t) - b) / (3 * a) ;
        valid2 = (s * Math.cos(t - bi)-b)/( 3 * a);
        valid3 = (s *Math.cos(t + bi)- b)/ (3 * a);

        outputText = `The valid of cubic equation are ${valid1} , ${valid2} and ${valid3}`;
    }
    else if(Math.abs(k) > 1)
    {
        valid1 = ((Math.abs(delta) * Math.abs(k)) / 3 * a * k) * (o - p) - (b/ (3*a));

        outputText = `The unique valid of cubic equation is ${valid1}`;
    }
}
else if(delta == 0)
{
    valid1 = valid2 = valid3 = (-b + (Math.pow(Math.pow(b,3) - (27*Math.pow(a, 2)*d) ,1/3))) / 3 *a;
    
    outputText = `The Multiple root of cubic equation is ${valid1}`;

}
else 
{
    valid1 = ((Math.sqrt(Math.abs(delta)))/ 3*a) * (i + u) -(b/ (3*a));

    outputText = `The unique valid root of cubic equation is ${valid1}`; 
}
document.getElementById("output_text1").innerHTML = outputText;
}
cubic();