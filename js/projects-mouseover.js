const slides = document.querySelectorAll('.splide__slide');

slides.forEach((slide) => {
    slide.addEventListener('mouseover', () => {
        slides.forEach((otherSlides) => {
            if (otherSlides !== slide) {
                otherSlides.style.filter = 'blur(4px)';
                otherSlides.style.opacity = '.3';
                otherSlides.style.transition = 'ease 1s';

            } else {
                slide.style.filter = 'none';
                slide.style.opacity = '1';
            }
        });
    });
});

slides.forEach((slide) => {
    slide.addEventListener('mouseout', () => {
         slides.forEach((everySlide) => {
             everySlide.style.filter = 'blur(0)';
             everySlide.style.opacity = '1';
        });
    });
});