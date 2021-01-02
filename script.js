let body;
let darkmode;
let rotate = 0;
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
  rotate++;
  darkmode.style.transform = `rotate(${180*rotate}deg)`;
  if (body.classList.toggle("darkmode")) {
    darkmode.title = "Click me to turn off dark mode!";
    document.cookie = "t";
  } else {
    darkmode.title = "Click me to turn on dark mode!";
    document.cookie = "f";
  }
}
window.addEventListener("load", handleLoad);