document.addEventListener('DOMContentLoaded', function () {
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const list = document.querySelector('.carousel .list');
let currentIndex = 0;
const items = document.querySelectorAll('.carousel .list .item');

function updateCarousel() {
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.style.zIndex = 1;
            item.classList.add('active');
        } else {
            item.style.zIndex = 0;
            item.classList.remove('active');
        }
    });
}

next.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

prev.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

updateCarousel();
});