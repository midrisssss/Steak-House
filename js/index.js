import { openSidebarListener, openChartListener, pageLoad, pageMenu } from './handler.js';
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
});