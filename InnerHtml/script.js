let age = 17;
let FirstName = "Yusuf";
let Surname = "Ekinci";
let Gender = "Male";
let RespectGender;
let Job = "Developer";
let Employee = true;

function JobYesNo(){
  if (Employee == true) {
    Employee = "Available";
  }
  else{
    Employee = "Not available";
    Job = "Unemployment";
  }
}

function Gendertransform() {
  if (Gender == "Male"){
    RespectGender = "Gentlemen";
  } 

  else{
    RespectGender = "Lady";
  }
}


Gendertransform();
JobYesNo();

document.getElementById("h1").innerHTML = "Hello Mr." + Surname;
if (age < 25) {
  document.getElementById("p1").innerHTML = age + " years old , You are so young.";
} else {
  document.getElementById("p1").innerHTML = age + " years old , You are adult";
}

if (Employee == "Available") {
  document.getElementById("p2").innerHTML =
    RespectGender + " Your Jobs : " + Job ;
} else {
  document.getElementById("p2").innerHTML =
    RespectGender + " Your Jobs : " + Employee;
}
document.getElementById("p3").innerHTML = "Sincerely " + FirstName +" "+ Surname;

