let count = 0;

document.getElementById("StartBtn").onclick = function(){
    count+=1;
    document.getElementById("counter").innerHTML = count;
}
document.getElementById("BackBtn").onclick = function(){
    count-=1;
    document.getElementById("counter").innerHTML = count;
}
document.getElementById("RestartBtn").onclick = function(){
    count = 0;
    document.getElementById("counter").innerHTML = count;
}

// |||| J U
// |||||||||||||| ST 
// ||||||||||||||||||||||| FE
// |||||||||||||||||||||||||||||||||||| EL
// ||||||||||||||||||||||||||||||||||||||||||||||||| Development 