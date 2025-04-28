let index = 0;
const slidesToShow = 3;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const totalSlides = slides.length;

// Clone slides for infinite effect
for (let i = 0; i < slidesToShow; i++) {
    const cloneFirst = slides[i].cloneNode(true);
    const cloneLast = slides[totalSlides - 1 - i].cloneNode(true);
    slider.appendChild(cloneFirst);
    slider.insertBefore(cloneLast, slider.firstChild);
}

// Auto-slide function
function moveSlide() {
    index++;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${(index * 100) / slidesToShow}%)`;

    setTimeout(() => {
        if (index >= totalSlides) {
            slider.style.transition = 'none';
            index = 0;
            slider.style.transform = `translateX(-${(index * 100) / slidesToShow}%)`;
        } else if (index < 0) {
            slider.style.transition = 'none';
            index = totalSlides - 1;
            slider.style.transform = `translateX(-${(index * 100) / slidesToShow}%)`;
        }
    }, 500);
}

// Set interval to auto move slides every 1.5 seconds
setInterval(moveSlide, 1500);

