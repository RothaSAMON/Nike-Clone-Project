// this is slideshow
let currentSlide = [];

function pushArrow(carouselIndex, n) {
const carousels = document.querySelectorAll(".slideShow");
if (!currentSlide[carouselIndex]) {
    currentSlide[carouselIndex] = 0;
}
const carousel = carousels[carouselIndex];
const images = carousel.querySelectorAll(".slide-list");
const imageWidth = images[0].clientWidth;

currentSlide[carouselIndex] = Math.max(0, Math.min(currentSlide[carouselIndex] + n, images.length - 1));
carousel.scrollTo({ left: currentSlide[carouselIndex] * imageWidth, behavior: "smooth" });
}



// this is the form toggle for promote code
document.getElementById('accordionItem').addEventListener('click', function() {
    console.log("Accordion item clicked");
    const dropdown = document.querySelector('.accordion-dropdown');
    const arrow = document.querySelector('#arrow');

    arrow.classList.toggle('rotate-180');
    dropdown.classList.toggle('max-h-[100px]');
});

