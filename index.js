$('.navbar-small-devices').append($('.nav-collapse').children().clone())

$('.navbar-toggler').click(() => {
  console.log('click!');
  $('.navbar-small-devices').toggleClass('active');

})