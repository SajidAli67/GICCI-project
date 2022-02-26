
    var owl = $('.owl-carousel');
    owl.owlCarousel({ 
      loop:true,
          item:3,
          autoplay:true,
          autoplayHoverPause:true,
          nav:false,
          margin: 20,
          responsive:{
                  0:{
                      items:1, 
                  },
                  600:{
                      items:2,
                  },
                  1000:{
                      items:4,
                      loop:true
                  }
              }
    });
