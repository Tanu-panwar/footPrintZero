const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

// Open menu on hamburger click
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu on ✖ button click
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Close menu on any nav link click
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

// Close menu on outside click (blur area)
document.addEventListener("click", function (event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnOpenBtn = menuOpenButton.contains(event.target);
    const isClickOnCloseBtn = menuCloseButton.contains(event.target);

    if (
        document.body.classList.contains("show-mobile-menu") &&
        !isClickInsideMenu &&
        !isClickOnOpenBtn &&
        !isClickOnCloseBtn
    ) {
        document.body.classList.remove("show-mobile-menu");
    }
});


// slides move via arrows
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function startAutoSlide() {
  slideInterval = setInterval(autoSlide, 3000);
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  resetAutoSlide();
});

showSlide(currentIndex);
startAutoSlide();

// keyboard keys swipe
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    resetAutoSlide();
  } else if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    resetAutoSlide();
  }
});


// mobile swipe slides
let touchStartX = 0;
let touchEndX = 0;

const sliderWrapper = document.querySelector(".slider-wrapper");

sliderWrapper.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

sliderWrapper.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > 50) {
    // Swipe Right (previous slide)
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    resetAutoSlide();
  } else if (swipeDistance < -50) {
    // Swipe Left (next slide)
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    resetAutoSlide();
  }
}
