let num1;
let num2;
let num3;

document.getElementById("RollBtn").onclick = function(){
    num1 = Math.floor(Math.random() *100);
    document.getElementById("num1").innerHTML = num1;
    num2 = Math.floor(Math.random() *100);
    document.getElementById("num2").innerHTML = num2;
    num3 = Math.floor(Math.random() *100);
    document.getElementById("num3").innerHTML = num3;

    if(num1 == 99 || num3 == 99 || num4 == 99){
        alert("A blessing in disguise");
    }
}
document.getElementById("RestartBtn").onclick = function(){

    document.getElementById("num1").innerHTML = "";

    document.getElementById("num2").innerHTML = "";

    document.getElementById("num3").innerHTML = "";
}