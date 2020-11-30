var etat = false;
$(function() {
    jQuery.fn.appliquer_animation_classe = function(index, nextIndex, class_e, class_s, selec) {


        var id = this.attr('id');

        if (index.correspond_a('#' + id)) {
            if (class_s != '')
                $(selec).addClass(class_s);

            setTimeout(function() {

                if (class_s != '')
                    $(selec).removeClass(class_s);

                if (class_e != '')
                    $(selec).removeClass(class_e);
            }, 700);
        }


        if (nextIndex.correspond_a('#' + id))
            if (class_e != '')
                $(selec).addClass(class_e);


    };


    jQuery.fn.controller_animations = function(index, nextIndex, list_animations) {

        for (var i = 0; i < list_animations.length; i++) {
            var Classes_sortie;
            var Classes_entree;

            if (list_animations[i].classes_anim_entree != undefined)
                Classes_entree = list_animations[i].classes_anim_entree;
            else
                Classes_entree = '';


            if (list_animations[i].classes_anim_sortie != undefined)
                Classes_sortie = list_animations[i].classes_anim_sortie;
            else
                Classes_sortie = '';

            var Selecteur = '#' + $(this).attr('id') + ' ' + list_animations[i].selecteur;

            this.appliquer_animation_classe(index, nextIndex, Classes_entree, Classes_sortie, Selecteur);


        }


    };

    Number.prototype.correspond_a = function(selector) {
        var index = this;
        var continue_search = true;
        var result = '';
        var id = $(selector).attr('id');

        $("#global section").each(function() {
            if ($(this).attr('id') == id && continue_search) {
                continue_search = false;
                result = $(this).index();
                result++;
            }

        });
        if (continue_search)
            result = -1;

        return (result == index);
    };


    //slider plugin
    $("#slider").backgroundCycle({
        imageUrls: [
            'res/img/chateau-fourcas-hosten-accueil-cuvier-1500x1000.jpg',
            'res/img/chateau-fourcas-hosten-accueil-cuvier-raisin-1500x1000.jpg',
            'res/img/chateau-fourcas-hosten-listrac-medoc-vin-1500x1000.jpg'
        ],
        fadeSpeed: 1000,
        duration: 3000,
        backgroundSize: SCALING_MODE_COVER
    });



    //Full Page JS
    $('#global').fullpage({
        //navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',


        //  //Custom selectors
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},


        sectionSelector: 'section, footer',
        css3: false,
        slideSelector: '.slide',
        lazyLoading: true,

        //  //events
        onLeave: function(index, nextIndex, direction) {
            console.log('on quitte la slide ' + index + ' pour aller sur la slide ' + nextIndex);
            $('#slider').css('transform', 'scale(0.9)');
            $('#deux').css('transform', 'scale(1)');

            $('#slider').controller_animations(index, nextIndex, [{
                    selecteur: "#XMLID_565_ > g > g",
                    classes_anim_entree: "anim_text"
                },
                {
                    selecteur: '.anime_container',
                    classes_anim_entree: 'anime_in',
                    classes_anim_sortie: 'anime_out',
                },
                {
                    selecteur: '#XMLID_313_',
                    classes_anim_sortie: 'animated  fadeOutRight ',
                    classes_anim_entree: 'animated fadeInRight delay-15s'
                },
                {
                     selecteur: '#XMLID_508_',
                    classes_anim_sortie: 'animated  fadeOut',
                    classes_anim_entree: 'animated fadeIn '
                },
                {
                    selecteur: '#XMLID_429_',
                    classes_anim_sortie: 'animated fadeOutLeft',
                    classes_anim_entree: 'animated fadeInLeft delay-5s'
                },
                
            ]);
            $('#global').controller_animations(index, nextIndex, [{
                    selecteur: '#slider',
                    classes_anim_entree: 'animated fadeInUpBig delay-1s',
                    classes_anim_sortie: 'animated fadeOutBig delay-1s'


              }

            ]);

            $('#deuxieme').controller_animations(index, nextIndex, [{
                    selecteur: '#courone',
                    classes_anim_entree: 'animated fadeInDownBig delay-5s',
                    classes_anim_sortie: 'animated fadeOutBig delay-5s'


              }

            ]);

            $('#deux').controller_animations(index, nextIndex, [{
                    selecteur: '#text1',
                    classes_anim_entree: 'animated fadeInDownBig delay-15s',
                    classes_anim_sortie: 'animated fadeOutUpBig delay-5s'

                }

            ]);
            $('.visible').controller_animations(index, nextIndex, [{
                    selecteur: '#chiengauchemenu',
                    classes_anim_sortie: 'animated fadeOutLeft',
                    classes_anim_entree: 'animated fadeInRight delay-5s'

                }

            ]);
            $('.visible').controller_animations(index, nextIndex, [{
                    selecteur: '#chiengauchemenu',
                     classes_anim_sortie: 'animated fadeOutRight',
                    classes_anim_entree: 'animated fadeInLeft delay-5s'

                }

            ]);




            $('#deuxieme'  ).controller_animations(index, nextIndex, [{
                selecteur: '.fade',
                classes_anim_entree: 'animated fadeIn',
                    classes_anim_sortie: 'animated fadeOut delay-0.5s'

            }]);
            
            $('#deuxieme' ).controller_animations(index, nextIndex, [{
                selecteur: '.puce',
                classes_anim_sortie: 'animated shake delay-15s',
                    classes_anim_entree: 'animated shake delay-5s'
            }]);
            $('#trois' ).controller_animations(index, nextIndex, [{
                selecteur: '.puce',
                classes_anim_sortie: 'animated shake delay-15s',
                    classes_anim_entree: 'animated shake delay-5s'
            }]);
            $('#cinque' ).controller_animations(index, nextIndex, [{
                selecteur: '.puce',
                classes_anim_sortie: 'animated shake delay-15s',
                    classes_anim_entree: 'animated shake delay-5s'
            }]);
            
            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-2',
                    classes_anim_entree: ' animated fadeInLeftBig delay-2.1s',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-1',
                    classes_anim_entree: ' animated fadeInLeftBig delay-2s',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-3',
                    classes_anim_entree: ' animated fadeInLeftBig delay-2.2s',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-4',
                    classes_anim_entree: ' animated fadeInLeftBig delay-2.3s',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-4',
                    classes_anim_entree: ' animated fadeInLeftBig delay-2.4s',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-5',
                    classes_anim_entree: ' animated fadeInLeftBig delay-2.5s',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-6',
                    classes_anim_entree: ' animated fadeInLeftBig delay-2.6s',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-7',
                    classes_anim_entree: ' animated fadeInLeftBig delay-2.7s',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-8',
                    classes_anim_entree: ' animated fadeInLeftBig delay-2.8s',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-9',
                    classes_anim_entree: ' animated fadeInLeftBig delay-2.9s',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-10',
                    classes_anim_entree: ' animated fadeInLeftBig delay-3s',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);

            $('#deuxieme').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-1',
                    classes_anim_entree: 'animated fadeInRightBig delay-2',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#deuxieme').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-2',
                    classes_anim_entree: 'animated fadeInRightBig delay-2.1',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#deuxieme').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-3',
                    classes_anim_entree: 'animated fadeInRightBig delay-2.2',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#deuxieme').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-4',
                    classes_anim_entree: 'animated fadeInRightBig delay-2.3',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);
            $('#deuxieme').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-5',
                    classes_anim_entree: 'animated fadeInRightBig delay-2.4',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-5s'


                }

            ]);
            $('#deuxieme').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-6',
                    classes_anim_entree: 'animated fadeInRightBig delay-2.5',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-0.5s'


                }

            ]);


            $('#deuxieme').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-7',
                    classes_anim_entree: 'animated fadeInRightBig delay-2.6s',
                    classes_anim_sortie: 'animated fadeOut delay-0.5s'


                }

            ]);

            $('#deuxieme').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-8',
                    classes_anim_entree: 'animated fadeInRightBig delay-2.7s',
                    classes_anim_sortie: 'animated fadeOut delay-0.5s'


                }

            ]);
            $('#deuxieme').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-9',
                    classes_anim_entree: 'animated fadeInRightBig delay-2.8s',
                    classes_anim_sortie: 'animated fadeOut delay-0.5s'


                }

            ]);

            

            ;$('#trois').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-1',
                    classes_anim_entree: 'animated fadeInRightBig  delay-2s',
                    classes_anim_sortie: 'animated fadeOut delay-0.5s'


                }

            ]);


            $('#trois').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-2',
                    classes_anim_entree: 'animated fadeInRightBig  delay-2.1s',
                    classes_anim_sortie: 'animated fadeOut delay-0.5s'


                }

            ]);

            $('#trois').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-3',
                    classes_anim_entree: 'animated fadeInRightBig  delay-2.2s',
                    classes_anim_sortie: 'animated fadeOut delay-0.5s'


                }

            ]);

            $('#trois').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-4',
                    classes_anim_entree: 'animated fadeInRightBig  delay-2.3s',
                    classes_anim_sortie: 'animated fadeOut delay-0.5s'


                }

            ]);

            $('#trois').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-5',
                    classes_anim_entree: 'animated fadeInRightBig delay-2.4s',
                    classes_anim_sortie: 'animated fadeOut delay-0.5s'


                }

            ]);

            $('#trois').controller_animations(index, nextIndex, [{
                    selecteur: '.delay-6',
                    classes_anim_entree: 'animated fadeInRightBig delay-2.5s',
                    classes_anim_sortie: 'animated fadeOut delay-0.5s'


                }

            ]);

            $('#cinque').controller_animations(index, nextIndex, [{
                    selecteur: '#chien',
                    classes_anim_sortie: 'animated fadeOutLeftBig delay-10s',
                    classes_anim_entree: 'animated  fadeInLeftBig'

                }

            ]);

            $('#quatre').controller_animations(index, nextIndex, [{
                    selecteur: '#un',
                    classes_anim_entree: 'animated fadeInLeftBig',
                    classes_anim_sortie: 'animated fadeOutLeftBig'


                }

            ]);
            $('#quatre').controller_animations(index, nextIndex, [{
                    selecteur: '#douce',
                    classes_anim_entree: 'animated fadeInRightBig',
                    classes_anim_sortie: 'animated fadeOutRightBig'


                }

            ]);
            
            $('#trois').controller_animations(index, nextIndex, [{
                    selecteur: '#blason',
                    classes_anim_entree: 'animated fadeInDownBig delay-25s',
                    classes_anim_sortie: 'animated fadeOutBig delay-5s'

                }

            ]);
        },



        afterLoad: function(anchorLink, index) {
            $('section').css('transform', 'scale(1)');
        },
        afterRender: function() {

        },
        afterResize: function() {},
        afterResponsive: function(isResponsive) {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });

     /*jQuery.fn.parseCharsComputeDelay = function(classSpan) {

        var chars = $(this).text().split("");
        $(this).empty();
        var that = this;

        var cptr_spans = 5;
        $.each(chars, function () {
            cptr_spans++;
            var delay = 0.1 * cptr_spans;
            $(that).append("<span class='" + classSpan + "'>" + this + '</span>')
            $(that).children("." + classSpan + ":last-child").css('animation-delay', delay + 's')
        });
    };
       $("#deux h1").parseCharsComputeDelay("aimated ");
    $("#trois h1").parseCharsComputeDelay("animated ");*/

    $('').each(function(){
      var index = $(this).index();
    $(this).css('transition-delay','1.'+index+'s');
     });
    // apparition du menu 
    $('.button',).on('click', function() {
        
        $('#burger').addClass('visible');
        $('#burger').toggleClass('hidden');
        $('#chiendroitemenu').addClass('animated fadeInRightBig delay-35s');
        $('#chiengauchemenu').addClass('animated fadeInLeftBig delay-30s');
        $('#titremenu').addClass('animated fadeInDownBig delay-25s');
        $('#blasonmenu').addClass('animated fadeInDownBig delay-20s');

        //$('#burger').alternClass();


    });
    //afficher la page menu
    $('.hamburger').on('click',function(){   
        $('.hamburger').css("display","none");
         $('.open').css('display',"flex");   

    });
    //changer etat du bouton 
    $('.open').on('click',function(){
        
        $('#burger').toggleClass('hidden');
        $('.open').css("display","none");
         $('.hamburger').css('display',"flex",);
    });

    //scroll ver le bas de la premier section
    $('#suite').click(function() {
        $.fn.fullpage.moveSectionDown();
    })


    $('').addClass('animated infinite bounce');
    //jQuery.fn.alternClass = function() {
    //  $(this).toggleClass("hidden");
    //  $(this).toggleClass("visible");
    // //}


});