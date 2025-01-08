document.addEventListener('DOMContentLoaded', function () {
                        new Splide('#splide', {
                            
                            type: 'loop',
                            perPage: 3,
                            focus: 'center',
                            pagination: true,
                            arrows: true,
                            breakpoints: {
                            768: { perPage: 1 },
                            },
                            easing: 'ease',
                            speed: 400,
                            
                        }).mount();
                        x.style.display = "inherit";
                        });