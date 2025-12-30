document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.slide-container');
    const dotContainer = document.querySelector('.dot-container');

    let currentSlideIndex = 0;
    let slidesData = [];

    fetch('assets/data/about-me-slides.json')
        .then(res => res.json())
        .then(data => {
            slidesData = data;
            createSlides(slidesData);
            showSlide(0);
        })
        .catch(err => console.error('Failed to load slides:', err));

    function createSlides(slides) {
        slides.forEach((slide, index) => {
            // Slide
            const slideDiv = document.createElement('div');
            slideDiv.className = 'slide-home';

            slideDiv.innerHTML = `
                <img src="${slide.img}" alt="Slide ${index + 1}">
                <p class="caption">${slide.caption}</p>
            `;

            slideContainer.appendChild(slideDiv);

            // Dot
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => showSlide(index));
            dotContainer.appendChild(dot);
        });
    }

    function showSlide(n) {
        const slides = document.querySelectorAll('.slide-home');
        const dots = document.querySelectorAll('.dot');

        if (n >= slides.length) currentSlideIndex = 0;
        else if (n < 0) currentSlideIndex = slides.length - 1;
        else currentSlideIndex = n;

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[currentSlideIndex].classList.add('active');
        dots[currentSlideIndex].classList.add('active');
    }

    window.plusSlide = function (n) {
        showSlide(currentSlideIndex + n);
    };
});
