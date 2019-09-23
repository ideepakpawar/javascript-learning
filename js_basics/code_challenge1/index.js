var markHeight = 1.65;
var markWeight = 65;
var johnHeight =1.70;
var johnWeight =80;

function bmi(height,weight){
    var bmi = weight/height*height
return bmi;
}

var markBMI=bmi(markHeight,markWeight);
var johnBMI=bmi(johnHeight,johnWeight);
var bmiCompare = johnBMI>markBMI;
console.log("is john's bmi greater than mark's? ",bmiCompare);