// Dark Mood
var darkMode = document.getElementById("dark-mode");
darkMode.onclick = function(){
    document.body.classList.toggle("dark-mode-theme");
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode-theme");
}
//------------------------------------------------------//

// Text view
function toggleText() {
  var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");

  if (text1.style.display === "none") {
      text1.style.display = "block";
      text2.style.display = "none";
  } else {
      text1.style.display = "none";
      text2.style.display = "block";
  }
}
//------------------------------------------------------//