

$(document).ready(function() {
    $('.btn').click(function() {
        $('.message').text('Button clicked!');
    });
});

var btn = $('.btn');
btn.on('click', function() {
  $(this).toggleClass('active not-active');
});

//let menu = $('menu');
//
//function dropDown(element){
//    if(element.style.display === 'none'){
//        element.style.display = 'block';
//    }
//    else{
//        element.style.display = 'none';
//    }
//};

//btn.on('click', function(){
//    dropDown(menu);
//});





