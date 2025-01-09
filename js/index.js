const backgrounds = [
    'url("../assets/images/background1.jpg")',
    'url("../assets/images/background2.jpg")',
    'url("../assets/images/background3.jpg")'
];

let currentIndex = 0;
const homeSection = document.querySelector('.home-section');

function changeBackground() {
    homeSection.style.backgroundImage = backgrounds[currentIndex];
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

setInterval(changeBackground, 5000);

homeSection.style.transition = 'background-image 1s ease-in-out';


// section 3



const counters = document.querySelectorAll('.counter-number');

counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000; 
    const increment = target / (duration / 16); 

    const updateCounter = () => {
        const current = +counter.innerText;
        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 16);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});


$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.slider--btn__prev');
    const nextBtn = document.querySelector('.slider--btn__next');
    const sliderSection = document.querySelector('.voyage-slider-section');

    function updateBackgroundImage() {
        const current = document.querySelector('.slide2[data-current]');
        const currentImage = current.querySelector('.slide--image').getAttribute('src');
        sliderSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${currentImage})`;
        sliderSection.style.backgroundSize = 'cover';
        sliderSection.style.backgroundPosition = 'center';
    }

    function moveSlides(direction) {
        const current = document.querySelector('.slide2[data-current]');
        const next = document.querySelector('.slide2[data-next]');
        const prev = document.querySelector('.slide2[data-previous]');

        if (direction === 'next') {
            prev.removeAttribute('data-previous');
            current.removeAttribute('data-current');
            next.removeAttribute('data-next');

            prev.classList.remove('slide-transition-left');
            next.classList.remove('slide-transition-right');

            prev.classList.add('slide-transition-right');
            current.classList.add('slide-transition-left');

            prev.setAttribute('data-current', '');
            current.setAttribute('data-next', '');
            next.setAttribute('data-previous', '');
        } else if (direction === 'prev') {
            next.removeAttribute('data-next');
            current.removeAttribute('data-current');
            prev.removeAttribute('data-previous');

            next.classList.remove('slide-transition-right');
            prev.classList.remove('slide-transition-left');

            prev.classList.add('slide-transition-left');
            current.classList.add('slide-transition-right');

            prev.setAttribute('data-current', '');
            current.setAttribute('data-next', '');
            next.setAttribute('data-previous', '');
        }

        updateBackgroundImage();
    }

    prevBtn.addEventListener('click', () => moveSlides('prev'));
    nextBtn.addEventListener('click', () => moveSlides('next'));

    // Initial background setup
    updateBackgroundImage();
});

