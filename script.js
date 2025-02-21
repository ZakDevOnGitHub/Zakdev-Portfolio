function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function SelectLanguage(LanguageType){
  
  if (LanguageType == "English") {
    document.getElementById("introtext0").innerText = "Hey! I'm zakdev!";
  }
  if (LanguageType == "Spanish") {
    document.getElementById("introtext0").innerText = "¡Ey! ¡Soy zakdev!";
  }
  if (LanguageType == "French") {
    document.getElementById("introtext0").innerText = "Hé! Je suis zakdev!";
  }
  if (LanguageType == "Portuguese") {
    document.getElementById("introtext0").innerText = "Olá! Eu sou o Zakdev!";
  }
  if (LanguageType == "Arabic") {
    document.getElementById("introtext0").innerText = "!يا! أنا زاكديف!";
  }
}
