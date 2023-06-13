import { review, location, time, people, faqs } from './sh-profile.js';
import { menu } from './menu.js';
import { user, contactedUser, emailSubscription } from "./user.js";
import { data } from './data.js';

// let dataUser = [];

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
  if (data.length == 0) {
    loginSignUp();
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

function loginSignUp() {
  const login = "<section id='login' class='mx-auto my-auto padding-40 bg-dark width-80vw rounded'><div class='row d-flex'><h2 class='login-info col - 11 text - center'>Login</h2><div class='login-close col-1 text-end size-28 hover'>&times;</div></div><form action='' class='row container mx-auto my-3 width-100 g-4'><div class='col-12'><label for='name'>Name</label><input type='text' id='name-login' placeholder='Jhon Doe' class='form-control bg-transparent white-placeholder solid-primary text-light'></div><div class='col-12'><label for='password'>Password</label><input type='password' id='password-login' placeholder='your password' class='form-control bg-transparent white-placeholder solid-primary text-light'></div><div class='col-12'><button type='submit' id='login-submit' class='button-primary w-100 p-1'>Login</button></div><p class='col-12 text-center'>or</p><div class='col-12'><button type='button' class='signUpBtn button-transparent w-100 p-1'>Sign Up</button></div></form></section>";
  const signUp = `<section id="signUp" class="mx-auto my-auto padding-40 bg-dark width-80vw rounded"><div class="row d-flex"><h2 class="signUp-info col-11 text-center">Sign Up</h2><div class="signUp-close col-1 text-end size-28 hover">&times;</div></div><form action="" class="row container mx-auto my-3 width-100 g-4"><div class="col-6"><label for="name">Name</label><input type="text" id="name-signUp" placeholder="John Doe" class="form-control bg-transparent white-placeholder solid-primary text-light"></div><div class="col-6"><label for="password">Password</label><input type="password" id="password-signUp" placeholder="your password" class="form-control bg-transparent white-placeholder solid-primary text-light"></div><div class="col-6"><label for="tel">Phone</label><input type="tel" id="phone-signUp" placeholder="your Phone" class="form-control bg-transparent white-placeholder solid-primary text-light"></div><div class="col-6"><label for="email">Email</label><input type="email" id="email-signUp" placeholder="ymuhammadidris@gmail.com" class="form-control bg-transparent white-placeholder solid-primary text-light"></div><div class="col-12"><button type="submit" id="signUp-submit" class="button-primary w-100 p-1">Sign Up</button></div><p class="col-12 text-center mb-0">or</p><div class="col-12"><button type="button" class="loginBtn button-transparent w-100 p-1">Login</button></div></form></section>`;

  $('main').append(login, signUp);
}

function signUp() {
  let name = $('#name-signUp').val();
  let password = $('#password-signUp').val();
  let tel = $('#phone-signUp').val();
  let email = $('#email-signUp').val();

  let dataUser = user.filter((u) => u.name == name);
  if (dataUser.length == 0) {
    user.push({ name, password, tel, email });
    data.push(user[user.length - 1]);
    console.log(user[1]);
    alert("successfully sign up")
    $('#name-signUp').val("");
    $('#password-signUp').val("");
    $('#phone-signUp').val("");
    $('#email-signUp').val("");
    $('#signUp').removeClass('show');
    $('#account-null').attr('class', 'd-none');
  } else {
    $('#name-signUp').val("");
    $('#password-signUp').val("");
    $('#phone-signUp').val("");
    $('#email-signUp').val("");
    alert("Username is already taken!")
  }
}

function login() {
  let name = $('#name-login').val();
  let password = $('#password-login').val();

  let dataUser = user.filter((u) => u.name == name);

  if (dataUser.length == 1 && dataUser[0].password == password) {
    data.push(dataUser[0]);
    $('#name-login').val("");
    $('#password-login').val("");
    alert("successfully login");
    $('#login').removeClass('show');

    $('#account-null').attr('class', 'd-none');
    // console.log("data user" + JSON.stringify(dataUser));
  } else {
    $('#name-login').val("");
    $('#password-login').val("");
    alert("Invalid email or password!")
  }
}

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

function addMenu() {
  $('#plus').click(function () {
    let quantity = $('#quantity').text();
    $('#quantity').text(++quantity);
  })
}

function substractMenu() {
  $('#minus').click(function () {
    let quantity = $('#quantity').text();
    if (quantity > 0)
      $('#quantity').text(--quantity);
  })
}

export { openSidebarListener, openChartListener, pageLoad, openProduct, addMenu, substractMenu, signUp, login };

