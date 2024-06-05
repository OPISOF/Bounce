document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.btnMenu');
    let menu = document.querySelector('.menu');

    btn.addEventListener('click', function() {
        btn.classList.toggle('active');
        btn.classList.toggle('not-active');
        dropDown(menu);
    });

    function dropDown(element) {
        if (getComputedStyle(element).display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;
    slides[currentSlide].classList.add('act');

    function changeSlide() {
        slides[currentSlide].classList.remove('act');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('act');
    }

    setInterval(changeSlide, 5000);
});
        









