import { review, location, time, people, faqs } from './sh-profile.js';
import { menu } from './menu.js';

function pageLoad() {
  $('.reviewer>.message').text(review[0].message);
  $('.reviewer img').attr('src', review[0].img);
  $('.reviewer figcaption').text(review[0].name);

  pageMenu(0);
  for (let index = 0; index < location.length; index++) {
    let opt = "<option value='" + location[index] + "' class='text-dark'>" + location[index] + "</option>";
    $('#location').append(opt);
  }
  for (let index = 0; index < time.length; index++) {
    let opt = "<option value='" + time[index] + "' class='text-dark'>" + time[index] + "</option>";
    $('#time').append(opt);
  }
  for (let index = 0; index < people.length; index++) {
    let opt = "<option value='" + people[index] + "' class='text-dark'>" + people[index] + "</option>";
    $('#numberPeople').append(opt);
  }
  for (let index = 0; index < faqs.length; index++) {
    let h5 = "<h5 class=\"faqs-question p-2 size-16 dotted-primary\">" + faqs[index].question + "</h5>";
    let p = "<p class=\"faqs-answer p-2 size-12 dotted-primary\" style=\"display: none;\">" + faqs[index].answer + "</p>";
    let wrapper = "<div id=\"" + faqs[index].id + "\" class=\"faqs-content col-12 p-0\">" + h5 + p + "</div>";

    $('#faqs-contents').append(wrapper);
  }
}

function openSidebarListener() {
  $('#nav-chart.nav-dropdown').removeClass('show');
  $('#nav-sidebar.nav-dropdown').toggleClass('show');
}

function openChartListener() {
  $('#nav-sidebar.nav-dropdown').removeClass('show');
  $('#nav-chart.nav-dropdown').toggleClass('show');
};

function pageMenu(value) {
  let category = "";

  switch (value) {
    case 0:
      category = "breakfast";
      console.log(category);
      break;

    case 1:
      category = "lunch";
      console.log(category);
      break;

    case 2:
      category = "dinner";
      console.log(category);
      break;

    case 3:
      category = "dessert";
      console.log(category);
      break;

    case 4:
      category = "drink";
      console.log(category);
      break;

    default:
      break;
  }
  for (let index = 0; index < menu[category].length; index++) {
    let cardImg = "<img src='" + menu[category][index].img + "' class='card-img-top'>"

    let h5 = "<h5 class='card-title size-18'>" + menu[category][index].name + "</h5>";
    let p = "<p class='card-text size-16'>" + menu[category][index].fill + "</p>";
    let h6 = "<h6 class='size-16 color-primary'>$" + menu[category][index].price + "</h6>";

    let div = "<div class='card-body text-light p-2'>" + h5 + p + h6 + "</div>";
    let card = "<div id='" + menu[category][index].id + "' class='card bg-transparent border border-0'>" + cardImg + div + "</div>";
    let wrapper = "<div class='col'>" + card + "</div>";

    $('#menu-' + category).append(wrapper);
  }

  value++;
  $('#menu-' + category).hide();
  if (value < 5) {
    pageMenu(value);
  }
  $('#menu-breakfast').show();
}

function openProduct(id) {
  let product;
  if (id >= 0 && id <= 6) {
    product = menu['breakfast'].filter((array) => array.id == id);
    console.log(product);
  } else if (id >= 7 && id <= 18) {
    product = menu['lunch'].filter((array) => array.id == id);
    console.log(product);
  } else if (id >= 19 && id <= 24) {
    product = menu['dinner'].filter((array) => array.id == id);
    console.log(product);
  } else if (id >= 25 && id <= 30) {
    product = menu['dessert'].filter((array) => array.id == id);
    console.log(product);
  } else if (id >= 31 && id <= 36) {
    product = menu['drink'].filter((array) => array.id == id);
    console.log(product);
  }
  console.log(product[0].img);
  $('.product-name').text(product[0].name);
  $('img.product-img').attr('src', product[0].img);
  $('.product-description').text(product[0].description);
  $('#product-weight').text(product[0].detail['weight']);
  $('#product-dimension').text(product[0].detail['dimensions']);
  $('#product-chef').text(product[0].detail['chef']);
  $('#product-number').text(product[0].detail['numberItem']);
  $('#product-price').text('$' + product[0].price);
  $('#product').addClass('show');
  $('main>section>*:not(#product), footer').css({
    "filter": 'blur(20px)',
    "pointer-events": 'none',
    "user-select": 'none'
  })
}

export { openSidebarListener, openChartListener, pageLoad, openProduct };

