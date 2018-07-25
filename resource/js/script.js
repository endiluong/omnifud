
$(document).ready(function () {
   /*For sticky nav */
   $('.js--section-features').waypoint(function (direction) {
      if (direction == 'down') {
         $('nav').addClass('sticky');
      } else {
         $('nav').removeClass('sticky');
      }

   }, {
         offset: '60px;'
      });

   /*Scroll on Button Click */
   $('.js--scroll-to-plans').click(function () {
      $('html,body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
   });
   /*SCroll to fearures */
   $('.js--scroll-to-start').click(function () {
      $('html,body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
   });

   // NAV SCROLL smoothy effect
   $(function () {
      $('a[href*=\\#]:not([href=\\#])').click(function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
               $('html,body').animate({
                  scrollTop: target.offset().top
               }, 1000);
               return false;
            }
         }
      })
   })

   // Animation on scroll
   $('.js--wp-1').waypoint(function (direction) {
      $('.js--wp-1').addClass('animated fadeIn');
   }, { offset: '50%;' }
   )
   // FLying smartphone animation
   $('.js--wp-2').waypoint(function (direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
   }, { offset: '40%;' }
   )
   //Fade in picture
    $('.js--wp-3').waypoint(function (direction) {
      $('.js--wp-3').addClass('animated fadeIn');
   }, { offset: '70%;' }
   )
   //Pulse box
    $('.js--wp-4').waypoint(function (direction) {
      $('.js--wp-4').addClass('animated pulse');
   }, { offset: '40%;' }
   )
   //wobble
    $('.js--wp-5').waypoint(function (direction) {
      $('.js--wp-5').addClass('animated wobble');
   }, { offset: '40%;' }
   )
});