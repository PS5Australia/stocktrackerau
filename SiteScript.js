window.onload = function darkMode() {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

function myFunction() {
    document.getElementById("easteregg").innerHTML = "Wow! You found this :O";
  }


function twitterPs5() {
  window.open('https://twitter.com/Ps5Australia', '_blank');
}
function twitterXsx() {
  window.open('https://twitter.com/XSXAustralia', '_blank');
}

function twitterRat() {
  window.open('https://twitter.com/RATStockAU', '_blank');
}

function discord() {
  window.open('https://discord.gg/jzSfgkdsTv', '_blank');
}