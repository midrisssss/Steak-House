import { review } from './review.js';
import { menu } from './menu.js';

function pageLoad() {
  $('.reviewer>.message').text(review[0].message);
  $('.reviewer img').attr('src', review[0].img);
  $('.reviewer figcaption').text(review[0].name);

  pageMenu(0);
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
    let card = "<div class='card bg-transparent border border-0'>" + cardImg + div + "</div>";
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

export { openSidebarListener, openChartListener, pageLoad, pageMenu };


/* <div class="home-card d-flex">
<div class="home-card-content col p-3">
  <div class="p-3 text-center">
      <span class="price">$45.95</span>
      <h5 class="h5-homeCard">Grilled Fillet</h5>
      <p class="">Pork fillet, ginger, garlic, honey,
          pepper & canola oil.creamy
          chesapeake crab dip with
          artichoke, baked and topped with
          cheddar cheese, with crusty bread.</p>
  </div>
</div>
<img src="../img/image 8.png" class="home-card-img">
</div> */

