(function($){ 'use strict'


  $(document).ready(function(){
    setTimeout(function(){
      $('body').addClass('loaded');
    },300)
  });
 
  $('.mn-ico .fa, .menu_ics .fa').on('click', function () {
      $("body").toggleClass("mn-act");
  });
    // navbar Scroll //
     
    $(".navbar-nav li a, .downArrow").on("click", function (e) {
        var anchor = $(this);
        $("html, body").stop().animate({ 
            scrollTop: $(anchor.attr("href")).offset().top - 60
        }, 1000);
        e.preventDefault();
    });

    var win = $(window);
      win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 150) {
            $("#pageHeader").addClass("shrink");
        } else {
            $("#pageHeader").removeClass("shrink");
        }
    });

    $('.sldr').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

    //Type js for text animation 
    
    var typed = new Typed('#typed', {
      strings: ["a Front End Developer", "a UI/UX Designer. "],
      typeSpeed: 50,
      loop: true,
    });
    
    particlesJS('Particle-ground',
  
      {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#444"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#444"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#444",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "top",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 250,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 600,
              "size": 80,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }

    );
   

})(jQuery);
