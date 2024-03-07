import { openSidebarListener, openChartListener, pageLoad, openProduct, plus, minus, signUp, login, addMenu, address, note, bookATable, deleteChart } from './handler.js';
import { menu } from './menu.js';

let id = 0;

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
  $('.card-menu').click(function () {
    id = this.id;
    openProduct(id);
  })
  $('.product-close').click(function () {
    $('#product').removeClass('show');
    $('main>section>*:not(#product), footer').css({
      "filter": 'blur(0px)',
      "pointer-events": 'auto',
      "user-select": 'auto'
    })
  })
  $('.faqs-content').click(function () {
    $('.faqs-answer').slideUp();
    $('#' + this.id + ">.faqs-answer").slideToggle(500);
  })
  plus();
  minus();
  $('.loginBtn').click(function () {
    $('#signUp').removeClass('show');
    $('#login').addClass('show');
    $('#nav-sidebar.nav-dropdown').removeClass('show');
  })
  $('.login-close').click(function () {
    $('#login').removeClass('show');
  })
  $('.signUpBtn').click(function () {
    $('#login').removeClass('show');
    $('#signUp').addClass('show');
    $('#nav-sidebar.nav-dropdown').removeClass('show');
  })
  $('.signUp-close').click(function () {
    $('#signUp').removeClass('show');
  })
  $('#signUp-submit').click(signUp);
  $('#login-submit').click(login);
  $('#change-address').click(function () {
    $('#address').addClass('show');
  });
  $('.address-close').click(function () {
    $('#address').removeClass('show');
  })
  $('#save-address').click(address);

  $('.btn-note').click(function () {
    $('#note').addClass('show');
  });
  $('.note-close').click(function () {
    $('#note').removeClass('show');
  })
  $('#save-note').click(note);

  $('#bookATable').click(bookATable);

  $('#addMenu').click(function () {
    addMenu(id);
  })

  $('#deleteChart').click(deleteChart);
});