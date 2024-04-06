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









