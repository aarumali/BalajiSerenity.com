(function($) {

    "use strict";





    $(window).load(function() {



        //PRELOADER

        var loader = $(".loader");

        var wHeight = $(window).height();

        var wWidth = $(window).width();

        var o = 0;



        loader.css({

            top: wHeight / 2 - 2.5,

            left: wWidth / 2 - 200

        })



        do {

            loader.animate({

                width: o

            }, 10)

            o += 3;

        } while (o <= 400)

        if (o === 402) {

            loader.animate({

                left: 0,

                width: '100%'

            })

            loader.animate({

                top: '0',

                height: '100vh'

            })

        }



        setTimeout(function() {

            $(".loader-wrapper").fadeOut('fast');

            (loader).fadeOut('fast');

        }, 3500);



    }); // window load end





    // One Page Nav

    var top_offset = $('.header-area').height() - 0;

    $('.main-menu nav ul').onePageNav({

        currentClass: 'active',

        scrollOffset: top_offset,

    });



    // stcky menu

    $(window).on('scroll', function() {

        var scroll = $(window).scrollTop();

        if (scroll < 245) {

            $("#header-sticky").removeClass("sticky-menu");

        } else {

            $("#header-sticky").addClass("sticky-menu");

        }

    });



    // data - background

    $("[data-background]").each(function() {

        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")

    })





    // RESPONSIVE MENU

    $('.responsive').on('click', function(e) {

        $('#basic-nav').slideToggle();

    });







    // menu toggle

    $(".basic-menu li a").on('click', function() {

        if ($(window).width() < 1200) {

            $("#basic-nav").slideUp();

        }

    });





    $('a.smoth-scroll').on('click', function(event) {

        var $anchor = $(this);

        $('html, body').stop().animate({

            scrollTop: $($anchor.attr('href')).offset().top - 40

        }, 1000);

        event.preventDefault();

    });











    // mainSlider

    function mainSlider() {

        var BasicSlider = $('.slider-active');

        BasicSlider.on('init', function(e, slick) {

            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');

            doAnimations($firstAnimatingElements);

        });

        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {

            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');

            doAnimations($animatingElements);

        });

        BasicSlider.slick({

            autoplay: false,

            autoplaySpeed: 10000,

            dots: false,

            fade: true,

            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',

            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',

            arrows: true,

            responsive: [

                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }

            ]

        });



        function doAnimations(elements) {

            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            elements.each(function() {

                var $this = $(this);

                var $animationDelay = $this.data('delay');

                var $animationType = 'animated ' + $this.data('animation');

                $this.css({

                    'animation-delay': $animationDelay,

                    '-webkit-animation-delay': $animationDelay

                });

                $this.addClass($animationType).one(animationEndEvents, function() {

                    $this.removeClass($animationType);

                });

            });

        }

    }

    mainSlider();





    // owlCarousel

    $('.brand-active').owlCarousel({

        loop: true,

        margin: 30,

        items: 6,

        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

        nav: false,

        dots: false,

        responsive: {

            0: {

                items: 1

            },

            767: {

                items: 4

            },

            992: {

                items: 6

            }

        }

    })



    $('.postbox__gallery').owlCarousel({

        loop: true,

        margin: 0,

        items: 1,

        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

        nav: true,

        dots: false,

        responsive: {

            0: {

                items: 1

            },

            767: {

                items: 1

            },

            992: {

                items: 1

            }

        }

    })





    /* magnificPopup img view */

    $('.popup-image').magnificPopup({

        type: 'image',

        gallery: {

            enabled: true

        }

    });



    /* magnificPopup video view */

    $('.popup-video').magnificPopup({

        type: 'iframe'

    });





    // isotop

    $('.grid').imagesLoaded(function() {

        // init Isotope

        var $grid = $('.grid').isotope({

            itemSelector: '.grid-item',

            percentPosition: true,

            masonry: {

                // use outer width of grid-sizer for columnWidth

                columnWidth: '.grid-item',

            }

        });

        // filter items on button click

        $('.portfolio-menu').on('click', 'button', function() {

            var filterValue = $(this).attr('data-filter');

            $grid.isotope({
                filter: filterValue
            });

        });



        //for menu active class

        $('.portfolio-menu button').on('click', function(event) {

            $(this).siblings('.active').removeClass('active');

            $(this).addClass('active');

            event.preventDefault();

        });



    });









    // scrollToTop

    $.scrollUp({

        scrollName: 'scrollUp', // Element ID

        topDistance: '300', // Distance from top before showing element (px)

        topSpeed: 300, // Speed back to top (ms)

        animation: 'fade', // Fade, slide, none

        animationInSpeed: 200, // Animation in speed (ms)

        animationOutSpeed: 200, // Animation out speed (ms)

        scrollText: '<i class="pe-7s-angle-up"></i>', // Text for element

        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'

    });



    // WOW active

    new WOW({
        mobile: false
    }).init();



    // Instafeed

    if ($("#Instafeed").length) {

        var feed = new Instafeed({

            get: 'user',

            userId: 10004252607,

            accessToken: '10004252607.1677ed0.afb55516e4354f0181daa4bee86a9919',

            target: 'Instafeed',

            resolution: 'thumbnail',

            limit: 9,

            template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',

        });

        feed.run();

    }







    // map

    function basicmap() {

        // Basic options for a simple Google Map

        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

        var mapOptions = {

            // How zoomed in you want the map to start at (always required)

            zoom: 11,

            scrollwheel: false,

            // The latitude and longitude to center the map (always required)

            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // This is where you would paste any style found on Snazzy Maps.

            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e9e9e9"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dedede"
                }, {
                    "lightness": 21
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffffff"
                }, {
                    "lightness": 16
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#333333"
                }, {
                    "lightness": 40
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f2f2f2"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }]

        };

        // Get the HTML DOM element that will contain your map

        // We are using a div with id="map" seen below in the <body>

        var mapElement = document.getElementById('contact-map');



        // Create the Google Map using our element and options defined above

        var map = new google.maps.Map(mapElement, mapOptions);



        // Let's also add a marker while we're at it

        var marker = new google.maps.Marker({

            position: new google.maps.LatLng(40.6700, -73.9400),

            map: map,

            title: 'Cryptox'

        });

    }

    if ($('#contact-map').length != 0) {

        google.maps.event.addDomListener(window, 'load', basicmap);

    }







})(jQuery);









window.addEventListener('load', onWndLoad, false);

function onWndLoad() {
   
    var slider = document.querySelector('.slider');
    var sliders = slider.children;
   
   
   
   
    var initX = null;  
    var transX = 0;
    var rotZ = 0;
    var transY = 0;
   
    var curSlide = null;
    
    var Z_DIS = 50;
    var Y_DIS = 10;
    var TRANS_DUR = 0.4;
  
     var images=document.querySelectorAll('img');
  for(var i=0;i<images.length;i++)
    {
      images[i].onmousemove=function(e){
        e.preventDefault()
        
      }
      images[i].ondragstart=function(e){
        return false;
        
      }
    }
  
    function init() {
       
        var z = 0, y = 0;

        for (var i = sliders.length-1; i >=0; i--) {
            sliders[i].style.transform = 'translateZ(' + z + 'px) translateY(' + y + 'px)';
           
            z -= Z_DIS;
            y += Y_DIS;
        }


        attachEvents(sliders[sliders.length - 1]);

      
       
    }
    function attachEvents(elem) {
        curSlide = elem;

        curSlide.addEventListener('mousedown', slideMouseDown, false);
        curSlide.addEventListener('touchstart', slideMouseDown, false);
    }
    init();
    function slideMouseDown(e) {
    
        if (e.touches) {
            initX = e.touches[0].clientX;
        }
        else {
            initX = e.pageX;
        }
     
       
        document.addEventListener('mousemove', slideMouseMove, false);
        document.addEventListener('touchmove', slideMouseMove, false);

        document.addEventListener('mouseup', slideMouseUp, false);
        document.addEventListener('touchend', slideMouseUp, false);
    }
    var prevSlide = null;
   
    function slideMouseMove(e) {
        var mouseX;
      
        if (e.touches) {
            mouseX = e.touches[0].clientX;
        }
        else {
            mouseX = e.pageX;
        }

        transX += mouseX - initX;
        rotZ = transX / 20;

        transY = -Math.abs(transX / 15);
     
      
      
        curSlide.style.transition = 'none';
        curSlide.style.webkitTransform = 'translateX(' + transX + 'px)' + ' rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
       curSlide.style.transform = 'translateX(' + transX + 'px)' + ' rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
        var j = 1;
        //remains elements
         for (var i = sliders.length -2; i >= 0; i--) {

        sliders[i].style.webkitTransform = 'translateX(' + transX/(2*j) + 'px)' + ' rotateZ(' + rotZ/(2*j) + 'deg)' + ' translateY(' + (Y_DIS*j) + 'px)'+ ' translateZ(' + (-Z_DIS*j) + 'px)';
        sliders[i].style.transform = 'translateX(' + transX/(2*j) + 'px)' + ' rotateZ(' + rotZ/(2*j) + 'deg)' + ' translateY(' + (Y_DIS*j) + 'px)'+ ' translateZ(' + (-Z_DIS*j) + 'px)';
        sliders[i].style.transition = 'none';
        j++;
        }      
        
          
         
          initX =mouseX;
          e.preventDefault();
          if (Math.abs(transX) >= curSlide.offsetWidth-30) {
           
              document.removeEventListener('mousemove', slideMouseMove, false);
              document.removeEventListener('touchmove', slideMouseMove, false);
              curSlide.style.transition = 'ease 0.2s';
              curSlide.style.opacity = 0;
              prevSlide = curSlide;
              attachEvents(sliders[sliders.length - 2]);
              slideMouseUp();
              setTimeout(function () {
                 
               
                 
               
                  
                  slider.insertBefore(prevSlide, slider.firstChild);
                  
                  prevSlide.style.transition = 'none';
                  prevSlide.style.opacity = '1';
                  slideMouseUp();
                
              },201);
            
             
              
              return;
          }
    }
    function slideMouseUp() {
        transX = 0;
        rotZ = 0;
        transY = 0;
      
        curSlide.style.transition = 'cubic-bezier(0,1.95,.49,.73) '+TRANS_DUR+'s';

        curSlide.style.webkitTransform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
       curSlide.style.transform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
        //remains elements
        var j = 1;
        for (var i = sliders.length -  2; i >= 0; i--) {
               sliders[i].style.transition = 'cubic-bezier(0,1.95,.49,.73) ' + TRANS_DUR / (j + 0.9) + 's';
        sliders[i].style.webkitTransform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + (Y_DIS*j) + 'px)' + ' translateZ(' + (-Z_DIS*j) + 'px)';
           sliders[i].style.transform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + (Y_DIS*j) + 'px)' + ' translateZ(' + (-Z_DIS*j) + 'px)';

        j++;
        }
         
        document.removeEventListener('mousemove', slideMouseMove, false);
        document.removeEventListener('touchmove', slideMouseMove, false);
     
    }


}