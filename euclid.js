function euclid(){
    let outputText

    let valid1, valid2;

    let val =parseInt ( document.forms["input_form4"]["v4"].value);
    let val2 = parseInt (document.forms["input_form4"]["v5"].value);

    valid1 = Math.abs(val);
    valid2 = Math.abs(val2);

     while (valid1 && valid2 && valid1 !== valid2) {
    [valid1, valid2] = valid1 > valid2 ? [valid1 - valid2, valid2] : [valid1, valid2 - valid1];
  }
    outputText = `The valid of GDC of ${val} , ${val2} are ${valid1} , ${valid2}`;

    document.getElementById("output_text4").innerHTML = outputText;
}
