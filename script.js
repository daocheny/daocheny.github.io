let body;
let darkmode;
let rotate = 0;
let cherry;
let night;
function handleLoad () {
  body = document.getElementsByTagName("BODY")[0];
  darkmode = document.getElementById("darkmode");
  darkmode.addEventListener("click", switchMode);
  cherry = document.querySelectorAll(".cherry");
  night = document.querySelectorAll(".night");

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if ((document.cookie === "" && prefersDarkScheme.matches) || document.cookie === "t") {
    switchMode();
  } else {
    switchMode();
    switchMode();
  }
}
function switchMode () {
  rotate++;
  darkmode.style.transform = `rotate(${180*rotate}deg)`;
  if (body.classList.toggle("darkmode")) {
    darkmode.title = "Click me to turn off dark mode!";
    document.cookie = "t";
    cherry.forEach(x => x.hidden = true);
    night.forEach(x => x.hidden = false);
  } else {
    darkmode.title = "Click me to turn on dark mode!";
    document.cookie = "f";
    cherry.forEach(x => x.hidden = false);
    night.forEach(x => x.hidden = true);
  }
}
window.addEventListener("load", handleLoad);