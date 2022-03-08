function equation(){
    var valid1, valid2;
    var D, Dx, Dy;
    var outputText;

    var a1 = parseInt (document.forms["input_form2"]["a1"].value);
    var b1 =parseInt ( document.forms["input_form2"]["b1"].value);
    var c1 = parseInt (document.forms["input_form2"]["c1"].value);
    var a2 =parseInt ( document.forms["input_form2"]["a2"].value);
    var b2 =parseInt ( document.forms["input_form2"]["b2"].value);
    var c2 = parseInt (document.forms["input_form2"]["c2"].value);

    D = a1 * b2 - a2 * b1;
    Dx = c1 * b2 - c2 * b1;
    Dy = a1 * c2 - a2 * c1;

    if(D == 0){
        if(Dx + Dy ==0)
        outputText = "The equation has infinitely solutions"
    
        else{
            outputText = "The equation has no solution"
        }
    }

    else {
        valid1 = Dx / D;
        valid2 = Dy / D;

        outputText = `The valid equation are ${valid1} and ${valid2}`;
    }
    document.getElementById("output_text2").innerHTML = outputText;
}
