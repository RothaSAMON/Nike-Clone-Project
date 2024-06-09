
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
