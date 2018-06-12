// put your js here :-)
function formatPrice(price) {

    if (typeof price !== 'string') {
        price = price.toString();
    }



    var remainder = price.length % 3;
    var thousands = price.substr(remainder).replace(/(\d{3})(?=\d)/g, '$1.');

    return '$' + (remainder > 0 ? price.substr(0, remainder) + '.' + thousands : thousands);
}


function goToByScroll(id){
  
    // Scroll
  $('html,body').animate({
      scrollTop: $(id).offset().top},
      'slow');
}