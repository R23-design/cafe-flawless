$(function(){
  $(".slide-items").slick({
    arrows: false,
    autoplay: true,
    fade: true,
    infinite: true,
    cssEase: 'linear',
    speed: 900,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
        }
      }
    ]
  });

  $('a[href^="#"]').click(function(){

    let href= $(this).attr("href");

    let target = $(href == "#" || href == "" ? 'html' : href);

    let position = target.offset().top;

    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });

  $('.hamburger').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });


  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });


  $('#navi a').on('click', function() {
    $('#header').removeClass('open');
  });


  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
});
