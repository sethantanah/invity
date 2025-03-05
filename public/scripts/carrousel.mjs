document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Set initial position
    track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

    // Next button click
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    // Previous button click
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    // Auto advance slides every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }, 5000);

    function updateCarousel() {
      // Move slide track
      track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
        if (index === currentIndex) {
          dot.classList.add("bg-[#C6A963]");
          dot.classList.remove("bg-white/50");
        } else {
          dot.classList.remove("bg-[#C6A963]");
          dot.classList.add("bg-white/50");
        }
      });
    }
  });