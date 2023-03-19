let Aplace;
let Bplace;
function Hypotenus(a, b) {
  a = Math.pow(a, 2);
  b = Math.pow(b, 2);
  c = Math.sqrt(a + b);
}
document.getElementById("button-submit").onclick = function () {
  Aplace = document.getElementById("a-place").value;
  Bplace = document.getElementById("b-place").value;

  Hypotenus(Aplace, Bplace);
  document.getElementById("c-place").innerHTML = "C place = " + c;
};

// |||| J U
// |||||||||||||| ST 
// ||||||||||||||||||||||| FE
// |||||||||||||||||||||||||||||||||||| EL
// ||||||||||||||||||||||||||||||||||||||||||||||||| Development 