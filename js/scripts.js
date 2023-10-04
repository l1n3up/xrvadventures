window.addEventListener('load', function(){
    $(document).ready(function() {
        $('.grp_slider').slick({
          dots: false,
          dotsClass: 'slick-dots',
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
          autoplaySpeed: 1000
        });
      
        $('.grp_slider_elem').click(function() {
          $('.grp_slider').slick('slickNext');
        });
    
        $('.grp_arrow_left').click(function() {
            $('.grp_slider').slick('slickPrev');
          });
    
        $('.grp_arrow_right').click(function() {
            $('.grp_slider').slick('slickNext');
          });
      });

      //Slider for feedbacks
      $(document).ready(function() {
        $('.feedback_slider').slick({
          dots: false,
          dotsClass: 'slick-dots',
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
          autoplaySpeed: 1000
        });
      
        $('.feedback_slider_elem').click(function() {
          $('.feedback_slider').slick('slickNext');
        });
        

        $('.custom-dots .custom-dot').click(function() {
            var slideIndex = $(this).index();
            $('.feedback_slider').slick('slickGoTo', slideIndex);
        });

        let allDots = document.querySelectorAll('.custom-dot');

        allDots.forEach(function(dot) {
          dot.addEventListener('click', function() {
            const selectedDot = this;
            if (!selectedDot.classList.contains('active')) {
              const activeDot = document.querySelector('.custom-dot.active');
              if (activeDot) {
                activeDot.classList.remove('active');
              }
              selectedDot.classList.add('active');
            }
          });
        });
        
        
        
    
      });


      // Stop the marquee while hovering

      function setUpMarquee(container){
        let marqueeCont = document.querySelector(container);
        let marquee = marqueeCont.querySelector('.marquee');

        let isHovered = false;

        marqueeCont.addEventListener('mouseenter', () => {
          isHovered = true;
          marquee.style.animationPlayState = 'paused';
        });

        marqueeCont.addEventListener('mouseleave', () => {
          isHovered = false;
          marquee.style.animationPlayState = 'running';
        });

        marqueeCont.addEventListener('animationiteration', () => {
          if(isHovered)
            marquee.style.animationPlayState = 'running';
        });
      }

      setUpMarquee('.marquee_first');
      setUpMarquee('.marquee_spec');


      // Masonry layout using masonry.js

      let grid = document.querySelector('.design_highlights_wrapper');

      let masonry = new Masonry(grid, {
        columnWidth: 494,
        gutter: 50,

      });


      //Menu scrollTo
      function addScrollEvent(menuClass, sectionClass, offset) {
          const menu = document.querySelector(menuClass);
          const section = document.querySelector(sectionClass);
          
          if (menu && section) {
              menu.addEventListener('click', function () {
                  event.preventDefault();
                  scrollToElem(section, offset);
              });
          }
        }

      function scrollToElem(el, offset) {
          let elementTop = el.getBoundingClientRect().top + window.scrollY;
          window.scroll({
              top: elementTop - offset,
              behavior: 'smooth'
          });

      }

      addScrollEvent('.menu_about', '.we_are_xrv_titles', -20);
      addScrollEvent('.menu_design', '.get_ready', -300);
      addScrollEvent('.menu_accessories', '.design_highlights', 0);
      addScrollEvent('.menu_gallery', '.marquee', 50);
      addScrollEvent('.menu_sale', '.product_lines_wrapper', 10);
      addScrollEvent('.menu_contact', '.we_are_here_container', 10);

      //Footer

      addScrollEvent('.footer_menu_about', '.about_us', 10);
      addScrollEvent('.footer_menu_design', '.get_ready', 0);
      addScrollEvent('.footer_menu_accessories', '.design_highlights', 0);
      addScrollEvent('.footer_menu_gallery', '.marquee', 50);
      addScrollEvent('.footer_menu_sale', '.product_lines_wrapper', 10);
      addScrollEvent('.footer_menu_contact', '.we_are_here_container', 10);
})


//Hamburger

    $(document).ready(function() {
      $('.header__burger').click(function(event){
        $('.header__burger, .xrv_wrapper_elem__menu').toggleClass('active');
        $('body').toggleClass('lock');
      });
    });