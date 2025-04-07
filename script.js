const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav_menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slider-nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      // Find the closest slider-wrapper for the clicked link
      const sliderWrapper = this.closest(".slider-wrapper");
      // Then find the slider within that slider-wrapper
      const slider = sliderWrapper.querySelector(".slider");

      // Get the target slide ID from the href (e.g., "#slide-04" becomes "slide-04")
      const targetId = this.getAttribute("href").substring(1);
      // Find the target slide within the current slider
      const targetSlide = slider.querySelector(`#${targetId}`);

      if (slider && targetSlide) {
        // Calculate the target slide's offset relative to the slider container
        const offsetLeft = targetSlide.offsetLeft;
        slider.scrollTo({
          left: offsetLeft,
          behavior: "smooth"
        });
      }
    });
  });
});