$(function(){

    $('.customer_slide').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
               },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
              },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }

       ]
    });
    // venobox 
    $('.venobox').venobox({
        spinner: 'cube-grid',
        frameheight:'500px',
        border:'5px'
    }); 

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // scroll animation 
    AOS.init({
        offset: 100,
        duration: 1200,
    });
    // fillter 

  // typing js 
  var typed = new Typed('.type', {
    strings: [
      'Graphics Desginer',
      'Web Designer', 
      'web Developer'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });
  // smooth scroll top button
  $("#BtnTop").click(function(){
    $('html, body').animate({scrollTop : 0},800);
  });
  $(window).scroll(function(){
    if($(this).scrollTop()> 40){
      $('#BtnTop').fadeIn();
    }else{
      $('#BtnTop').fadeOut();
    }
  });
});