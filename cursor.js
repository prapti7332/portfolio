document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener("mouseenter", () => {
      cursor.style.display = "block";
  });

  document.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const backToTop = document.getElementById("back-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 150) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});