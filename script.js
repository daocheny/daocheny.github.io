let body;
let darkmode;
function handleLoad () {
  body = document.getElementsByTagName("BODY")[0];
  darkmode = document.getElementById("darkmode");
  darkmode.addEventListener("click", switchMode);
  
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (prefersDarkScheme.matches) {
    switchMode();
  }
}
function switchMode () {
  if (body.classList.toggle("darkmode")) {
    darkmode.title = "Click me to turn off dark mode!";
  } else {
    darkmode.title = "Click me to turn on dark mode!";
  }
}
window.addEventListener("load", handleLoad);