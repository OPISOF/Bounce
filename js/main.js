$(document).ready(function() {
    $('.btn').click(function() {
        $('.message').text('Button clicked!');
    });
});

var btn = $('.btn');
btn.on('click', function() {
  $(this).toggleClass('active not-active');
});

let btnBar = document.getElementById('btnBars');

function dropDown(element) {
    
}

btnBar.addEventListener('click', function() {
    dropDown(btnBar);
});

