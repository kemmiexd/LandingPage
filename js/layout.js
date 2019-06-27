// slider
$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: true,
  nav: false,
  items: 1,
  autoHeight: true,
  autoplaySpeed: 1000,
});


// XZOOM
$('.xzoom-carousel').owlCarousel({
  loop:false,
  autoplay: false,
  dots: false,
  margin:10,
  nav: true,
  items: 4,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

// bí quyết
$('.our-product-carousel').owlCarousel({
  loop: false,
  autoplay: false,
  dots: true,
  nav: true,
  items: 1,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$(document).ready(() => {
  // go products
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.go-top').fadeIn().css('transform','scale(1)');
    } else {
      $('.go-top').fadeOut().css('transform','scale(0)');
    }
  });

  $('.article-top a, .go-top').click(() => {
    $('html, body').animate({
      scrollTop: $($('.product')).offset().top + 1
    }, 300, 'linear');
  });

  // after order product
  $('.order-submit').click(() => {
    Swal({
      title: 'Đặt hàng thành công',
      type: 'success',
      html: 'Quý khách vui lòng kiểm tra hòm thư có chứa thông tin đơn hàng. Xin cám ơn !',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        'Tiếp tục mua sắm',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  $('.order-submit').on('click', function() {
    $('.quickview, .modal-backdrop').removeClass('show')
    $('.quickview').css('display', 'none');
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open')
  });

  // zoom product
  $('.main-image').zoom();
  $('.zoom-thumbs img').eq(0).addClass('active');
  $('.xzoom-thumbs img').click(function() {
    const src = $(this).attr('src');
    $(this)
      .closest('.modal-img')
      .find('.img-main, .zoomImg')
      .attr('src', src);

    $(this)
      .closest('.modal-img')
      .find('.xzoom-thumbs img')
      .removeClass('active');

    $(this).addClass('active');
  });

  // menu active
  $('.menu a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top + -150
    }, 300, 'linear');
  });

  $(window).scroll(() => {
    const scrollPosition = $(document).scrollTop();

    $('.menu li a').each(function () {
      const currentLink = $(this);
      const refElement = $(currentLink.attr("href"));
      const refPosition = refElement.position().top;

      if (
        (refPosition + -200 <= scrollPosition)
        && (refPosition + refElement.height() > scrollPosition)
      ) {
        $('.menu li a.active').removeClass('active');
        $(this).addClass('active');
      } else {
        currentLink.removeClass("active");
      }
    });
  })
});
