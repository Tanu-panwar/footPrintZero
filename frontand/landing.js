// const navLinks = document.querySelector(" .nav-menu .nav-link");
// const menuOpenButton = document.querySelector("#menu-open-button");
// const menuCloseButton = document.querySelector("#menu-close-button");

// menuOpenButton.addEventListener("click", () => {
//     document.body.classList.toggle("show-mobile-menu");
// });

// menuCloseButton.addEventListener("click", () =>  menuOpenButton.click());

// navLinks.forEach(link => {
//     link.addEventListener("click", () => menuOpenButton.click());
// })

// //initialize swiper
// const swiper = new Swiper('.slider-wrapper', {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 25,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       dynamicBullets: true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     breakpoints: {
//         0: {
//             slidesPerView: 1
//         },
//         768: {
//             slidesPerView: 2
//         },
//         1024: {
//             slidesPerView: 3
//         }
//     }
// });


// Select all the needed elements
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Open mobile menu
menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

// Close mobile menu using close button
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Auto-close menu when any nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        // Prevent default anchor jump
        e.preventDefault();

        // Get target section ID
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        // Smooth scroll to the section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }

        // Then close the mobile menu
        document.body.classList.remove("show-mobile-menu");
    });
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
