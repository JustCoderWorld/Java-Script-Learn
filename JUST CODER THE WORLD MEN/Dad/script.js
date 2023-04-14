let All = document.getElementById("All");

let YesResultText = document.getElementById("YesResultText").innerHTML;
document.getElementById("YesResultText").innerHTML = "";

let NoResultText = document.getElementById("NoResultText").innerHTML;
document.getElementById("NoResultText").innerHTML = "";

function direction(ID, location, time) {
  if (time == 0) {
    window.location.href = location;
    return;
  }
  document.getElementById(ID).innerHTML = time;
  time--;
  setTimeout(function () {
    direction(ID, location, time);
  }, 1000);
}


document.getElementById("YesBtn").onclick = function () {
  document.getElementById("YesResultText").innerHTML = YesResultText;
  All.innerHTML = " ";
  direction("counter", "https://youtu.be/AqFj62v-PKY?t=17", 15);
};

document.getElementById("NoBtn").onclick = function () {
  document.getElementById("NoResultText").innerHTML = NoResultText;
  All.innerHTML = " ";
  direction("counter", "https://youtube.com/shorts/wQ1c2xVtnks?feature=share", 15);
};

// |||| J U
// |||||||||||||| ST
// ||||||||||||||||||||||| FE
// |||||||||||||||||||||||||||||||||||| EL
// ||||||||||||||||||||||||||||||||||||||||||||||||| Development
