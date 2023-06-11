import { openSidebarListener, openChartListener, pageLoad, openProduct } from './handler.js';
// import { menu } from './menu.js';

$(document).ready(function () {
  pageLoad();

  $('.openSidebar').click(openSidebarListener);
  $('.openChart').click(openChartListener);
  $('#tablink-0').on('click', function () {
    $('.tablink').removeClass('select');
    $('#tablink-0').addClass('select');
    $('.menu-content').hide();
    $('#menu-breakfast').show();
  });
  $('#tablink-1').on('click', function () {
    $('.tablink').removeClass('select');
    $('#tablink-1').addClass('select');
    $('.menu-content').hide();
    $('#menu-lunch').show();
  });
  $('#tablink-2').on('click', function () {
    $('.tablink').removeClass('select');
    $('#tablink-2').addClass('select');
    $('.menu-content').hide();
    $('#menu-dinner').show();
  });
  $('#tablink-3').on('click', function () {
    $('.tablink').removeClass('select');
    $('#tablink-3').addClass('select');
    $('.menu-content').hide();
    $('#menu-dessert').show();
  }); 
  $('#tablink-4').on('click', function () {
    $('.tablink').removeClass('select');
    $('#tablink-4').addClass('select');
    $('.menu-content').hide();
    $('#menu-drink').show();
  });
  $('.card').click(function () {
    let id = this.id;
    openProduct(id);
  })
  $('.product-close').click(function(){
    $('#product').removeClass('show');
    $('main>section>*:not(#product), footer').css({
      "filter": 'blur(0px)',
      "pointer-events": 'auto',
      "user-select": 'auto'
    })
  })
  $('.faqs-content').click(function () {
    $('.faqs-answer').slideUp();
    $('#'+ this.id +">.faqs-answer").slideToggle(500);
  })
});