var red=document.getElementById("myRed");
var green=document.getElementById("myGreen");
var blue=document.getElementById("myBlue");
var alpha=document.getElementById("myAlpha");

var Out1=document.getElementById("output-1");
var Out2=document.getElementById("output-2");
var Out3=document.getElementById("output-3");
var Out4=document.getElementById("output-4");

Out1.innerHTML = red.value;
Out2.innerHTML = green.value;
Out3.innerHTML = blue.value;
Out4.innerHTML = alpha.value;


red.oninput = function(){
    Out1.innerHTML = this.value;
    bchnage();
    
}

green.oninput = function(){
    Out2.innerHTML = this.value;
    bchnage();
}

blue.oninput = function(){
    Out3.innerHTML = this.value;
    bchnage();
}

alpha.oninput = function(){
    Out4.innerHTML =this.value;
    bchnage();
}

function bchnage(){
    var col = "rgba("+red.value+","+blue.value+","+green.value+","+alpha.value+")";
    document.body.style.backgroundColor = col;
}