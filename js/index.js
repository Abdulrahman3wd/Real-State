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
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS

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