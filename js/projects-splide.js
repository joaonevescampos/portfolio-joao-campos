document.addEventListener('DOMContentLoaded', function () {
new Splide('.splide.projects-container', {
    type: 'slide',
    perPage: 5,
    pagination: false,
    focus: 'center',
    gap: '20px',
    arrows: true,
    breakpoints: {
        1400: {
            perPage: 4,
         },
        1200: {
            perPage: 3,
        },
        768: { perPage: 2 },
        468: { perPage: 1 },
    },
    easing: 'ease',
    speed: 1500,
    
}).mount();
x.style.display = "inherit";
});

document.addEventListener('DOMContentLoaded', function () {
new Splide('.splide.projects-container2', {
    type: 'slide',
    perPage: 4,
    pagination: false,
    gap: '30px',
    arrows: true,
    breakpoints: {
    768: { perPage: 2 },
    },
    easing: 'ease',
    speed: 1500,
    
}).mount();
x.style.display = "inherit";
});