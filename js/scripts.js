/*------------------------------------------------------------
  Reveal
------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  function reveal() {
    const revealElement = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    for (let i = 0; i < revealElement.length; i++) {
      observer.observe(revealElement[i]);
    }
  }

  reveal();
});
