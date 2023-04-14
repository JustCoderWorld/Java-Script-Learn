let FirstName;
let UserName;
document.getElementById("submitbutton").onclick = function () {
  FirstName = document.getElementById("firstnametext").value;
  UserName = document.getElementById("usernametext").value;
  document.getElementById("h1id").innerHTML =
    "Welcome " + FirstName + " but you can call me " + UserName;
  document.getElementById("StartScreen").innerHTML = "";
};
