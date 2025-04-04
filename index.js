document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("splashShown")) {
      setTimeout(function () {
          document.getElementById("splash").style.opacity = "0";
          setTimeout(function () {
              document.getElementById("splash").style.display = "none";
              sessionStorage.setItem("splashShown", "true");
          }, 800);
      }, 2000); // Display splash for 2 seconds
  } else {
      document.getElementById("splash").style.display = "none";
  }
});