// script.js

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".banner-images img");
    let currentImageIndex = 0;

    function fadeImages() {
        images[currentImageIndex].classList.remove("active");
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add("active");
    }

    setInterval(fadeImages, 5000); // Change image every 5 seconds
});
