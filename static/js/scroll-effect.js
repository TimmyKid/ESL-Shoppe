  $(window).scroll(function () {
    if ($(document).scrollTop() > 480){
      $('nav').addClass('navbar-darker');
    }
    else {
      $('nav').removeClass('navbar-darker');
    }
});
