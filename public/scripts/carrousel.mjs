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






    // Get all carousel slides
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  
  // Add click event listener to each slide
  carouselSlides.forEach(slide => {
    slide.addEventListener('click', function() {
      const img = this.querySelector('img');
      if (img) {
        openFullscreen(img);
      }
    });
  });
  
  // Function to open image in fullscreen
  function openFullscreen(img) {
    // Create fullscreen container
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.className = 'fullscreen-container';
    fullscreenContainer.style.position = 'fixed';
    fullscreenContainer.style.top = '0';
    fullscreenContainer.style.left = '0';
    fullscreenContainer.style.width = '100%';
    fullscreenContainer.style.height = '100%';
    fullscreenContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    fullscreenContainer.style.display = 'flex';
    fullscreenContainer.style.justifyContent = 'center';
    fullscreenContainer.style.alignItems = 'center';
    fullscreenContainer.style.zIndex = '9999';
    fullscreenContainer.style.cursor = 'pointer';
    
    // Create fullscreen image
    const fullscreenImg = document.createElement('img');
    fullscreenImg.src = img.src;
    fullscreenImg.alt = img.alt;
    fullscreenImg.style.maxWidth = '90%';
    fullscreenImg.style.maxHeight = '90%';
    fullscreenImg.style.objectFit = 'contain';
    
    // Create close button
    const closeButton = document.createElement('div');
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '30px';
    closeButton.style.fontSize = '40px';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';
    
    // Add elements to container
    fullscreenContainer.appendChild(fullscreenImg);
    fullscreenContainer.appendChild(closeButton);
    
    // Add container to body
    document.body.appendChild(fullscreenContainer);
    
    // Close fullscreen on click
    fullscreenContainer.addEventListener('click', function() {
      document.body.removeChild(fullscreenContainer);
    });
    
    // Prevent propagation when clicking on the image
    fullscreenImg.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  });