const navLinks = document.querySelectorAll(" .nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () =>  menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
})


// slides and next-prev btn at slides

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

// keyboard arrows moving slide left right
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


// swipe effect at mobile
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
