let body;
let darkmode;
function handleLoad () {
  body = document.getElementsByTagName("BODY")[0];
  darkmode = document.getElementById("darkmode");
  darkmode.addEventListener("click", switchMode);
  
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if ((document.cookie === "" && prefersDarkScheme.matches) || document.cookie === "t") {
    switchMode();
  }
}
function switchMode () {
  if (body.classList.toggle("darkmode")) {
    darkmode.title = "Click me to turn off dark mode!";
    document.cookie = "t";
  } else {
    darkmode.title = "Click me to turn on dark mode!";
    document.cookie = "f";
  }
}
window.addEventListener("load", handleLoad);