/*** when user clicks on reset button, the calculator display is clear and the styles set back to normal. ***/
$("#reset").click(function(){
    $("#calDisplay").text("");
    $("#calDisplay").removeClass("answer");
});

/*** when user clicks on the numbers, the calculator diplay shows the text of the button. ***/
$(".num").click(function(){
    $("#calDisplay").append($(this).text());
});

/*** when user clicks on the equal button, the calculator evaluate the answer of the calculator diplay formula and display it with an answered style class. ***/
$("#eq").click(function(){
    $("#calDisplay").text(eval($("#calDisplay").text()));
    $("#calDisplay").addClass("answer");
});


/******** The following is a version without jQuery ********/

//var $resetButton = $("#reset");
//var $calDisplay = document.getElementById("calDisplay");
//
//resetButton.onclick = function(){
//	calDisplay.innerHTML = "";
//	calDisplay.setAttribute('class', '');
//}
//
//var buttons = document.getElementsByClassName("num");
//
//for (var i =0; i<buttons.length; i++){
//	buttons[i].onclick = function(){
//		document.getElementById('calDisplay').innerHTML += this.innerHTML;
//	}
//}
//
//var eqButton = document.getElementById("eq");
//eqButton.onclick = function(){
//	calDisplay.innerHTML = eval(calDisplay.innerHTML);
//	calDisplay.setAttribute('class', 'answer');
//}
//
//
