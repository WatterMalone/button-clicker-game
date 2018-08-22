var Btn = document.getElementById("Btn");
var shopbtn = document.getElementById("shopbtn");
var Surpreme = document.getElementById("Surpreme");
var clickSurpreme=0;
var clickshopbtn=10;


Btn.addEventListener("click", function(){
clickSurpreme++;
counter.innerHTML=clickSurpreme;

});

shopbtn.addEventListener("click", function(){
clickshopbtn+10;
counter.innerHTML=clickshopbtn;

});