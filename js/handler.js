import { review } from './review.js';

function pageLoad() {
  $('.reviewer>.message').text(review[0].message);
  $('.reviewer img').attr('src', review[0].img);
  $('.reviewer figcaption').text(review[0].name);
}
function openSidebarListener() {
  $('#chart-nav.dropdown-nav').removeClass('show');
  $('#sidebar-nav.dropdown-nav').toggleClass('show');
}
function openChartListener() {
  $('#sidebar-nav.dropdown-nav').removeClass('show');
  $('#chart-nav.dropdown-nav').toggleClass('show');
};

export { openSidebarListener, openChartListener, pageLoad };


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

