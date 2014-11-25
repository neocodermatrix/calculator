var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var buttonDivide = document.getElementById("buttonDivide");
var answerBox = document.getElementById("answerBox");
var buttonEqual = document.getElementById("buttonEqual")

button7.onclick = function (){
	answerBox.innerHTML += "7" ;
}

button8.onclick = function (){
	answerBox.innerHTML += "8" ;
}

button9.onclick = function (){
	answerBox.innerHTML += "9" ;
}

buttonDivide.onclick = function (){
	answerBox.innerHTML += " / " ;
}

// buttonEqual.onclick = function () {
// 	eval(answerBox.innerHTML)
// }


var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var buttonMultiply = document.getElementById("buttonMultiply");
var answerBox = document.getElementById("answerBox");


button4.onclick = function (){
	answerBox.innerHTML += "4" ;
}

button5.onclick = function (){
	answerBox.innerHTML += "5" ;
}

button6.onclick = function (){
	answerBox.innerHTML += "6" ;
}

buttonMultiply.onclick = function (){
	answerBox.innerHTML += " * " ;
}

buttonEqual.onclick = function () {
	answerBox.innerHTML = eval(answerBox.innerHTML);
}






var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var buttonPlus = document.getElementById("buttonPlus");
var answerBox = document.getElementById("answerBox");

button1.onclick = function (){
	answerBox.innerHTML += "1" ;
}

button2.onclick = function (){
	answerBox.innerHTML += "2" ;
}

button3.onclick = function (){
	answerBox.innerHTML += "3" ;
}

buttonPlus.onclick = function (){
	answerBox.innerHTML += " + " ;
}






var button0 = document.getElementById("button0");
var buttonPeriod = document.getElementById("buttonPeriod");
var buttonEqual = document.getElementById("buttonEqual");
var buttonClear = document.getElementById("buttonClear");
var buttonMinus = document.getElementById("buttonMinus");


button0.onclick = function (){
	answerBox.innerHTML += "0" ;
}

buttonPeriod.onclick = function (){
	answerBox.innerHTML += "." ;
}

// buttonEqual.onclick = function (){
// 	answerBox.innerHTML += "=" ;
// }

buttonClear.onclick = function(){
	answerBox.innerHTML = "";
}

buttonMinus.onclick = function(){
	answerBox.innerHTML += "-";
}

// var answerBox = document.getElementById("answerBox");
// answerBox.innerHTML
// eval(answerBox.innerHTML)

// var input = document.querySelector('#clear');
// var textarea = document.querySelector('#answerBox');

// input.addEventListener('click', function () {
//     textarea.value = '';
// }, false);