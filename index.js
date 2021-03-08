$('.navbar-small-devices').append($('.nav-collapse').children().clone())

$('.navbar-toggler').click(() => {
  $('.navbar-small-devices').toggleClass('active');
})

$('path').hover(function(){
  var element = $(this);
  var attributes = {};
  $.each(element.get(0).attributes, function(i, attrib){
  attributes[attrib.name] = attrib.value;
  });
  const name = attributes.name || attributes.class;

  $('#map-country-name').html(name);
  $('#map-country-name').css('opacity', '1');
  
  $(this).mousemove(function(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    $('#map-country-name').css({
      'top': `${clientY + 20}px`,
      'left': `${clientX + 20}px`
    });
  });
});

$('path').mouseout(function() {
  $('#map-country-name').css('opacity', '0');
})