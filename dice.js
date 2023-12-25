var number1=Math.floor(6*Math.random())+1;
var number2=Math.floor(6*Math.random())+1;
var image1= "./images/dice"+number1+".png";
var image2= "./images/dice"+number2+".png";
document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);
if(number1>number2){
    document.querySelector("h1").innerHTML="Player1 WINS";
}
else if(number1===number2){
    document.querySelector("h1").innerHTML="DRAW";

}
else{
    document.querySelector("h1").innerHTML="Player2 WINS";

}
