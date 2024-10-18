//rating
$(".cardSlider").slick({
    dots:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
         arrows:false,
         slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
         arrows:false,
         slidesToShow: 1,
        },
      },
     
    ],
  });
  //team
  $(".teamSlider").slick({
    dots:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
         arrows:false,
         slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
         arrows:false,
         slidesToShow: 1,
        },
      },
     
    ],
  });
  //courses slider
  $(document).ready(function(){
    $('.slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1
          }
        }
      ]
    });
  });
//home slider
$(".sliders").slick({
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
         arrows:false
        },
      },
     
    ],
  });
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })