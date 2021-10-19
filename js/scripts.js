$(document).ready(function() {
  const lightModeButton = document.getElementById("lightMode");
  const darkModeButton = document.getElementById("darkMode");
  $("button#lightMode").click(function() {
    $("body").toggleClass("light-mode");

    if(lightModeButton.textContent == "Reverse")
    {
      lightModeButton.textContent = "Light Mode"
    } else
    {
      lightModeButton.textContent = "Reverse";
    }
  })
  $("button#darkMode").click(function() {
    $("body").toggleClass("dark-mode");
    if(darkModeButton.textContent == "Reverse")
    {
      darkModeButton.textContent = "Dark Mode"
    } else
    {
      darkModeButton.textContent = "Reverse";
    }
  })
});