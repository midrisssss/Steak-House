import { review, location, time, people, faqs, payment } from './sh-profile.js';
import { menu } from './menu.js';
import { user, contactedUser, emailSubscription } from "./user.js";
let data = [];
data.push(user[0]);

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

  loginSignUp();
  chart();
  paymentt();
  $('#username').text(user[0].name);
  $('#account-name').text("Name : " + user[0].name);
  $('#account-password').text("Password : " + user[0].password);
  $('#account-email').text("Email : " + user[0].email);
  $('#account-phone').text("Phone : " + user[0].phone);
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
  const login = "<section id='login' class='mx-auto my-auto padding-40 bg-dark  rounded'><div class='row d-flex'><h2 class='login-info col - 11 text - center'>Login</h2><div class='login-close col-1 text-end size-28 hover'>&times;</div></div><form action='' class='row container mx-auto my-3 width-100 g-4'><div class='col-12'><label for='name'>Name</label><input type='text' id='name-login' placeholder='Jhon Doe' class='form-control bg-transparent white-placeholder solid-primary text-light'></div><div class='col-12'><label for='password'>Password</label><input type='password' id='password-login' placeholder='your password' class='form-control bg-transparent white-placeholder solid-primary text-light'></div><div class='col-12'><button type='button' id='login-submit' class='button-primary w-100 p-1'>Login</button></div><p class='col-12 text-center'>or</p><div class='col-12'><button type='button' class='signUpBtn button-transparent w-100 p-1'>Sign Up</button></div></form></section>";
  const signUp = `<section id="signUp" class="mx-auto my-auto padding-40 bg-dark  rounded"><div class="row d-flex"><h2 class="signUp-info col-11 text-center">Sign Up</h2><div class="signUp-close col-1 text-end size-28 hover">&times;</div></div><form action="" class="row container mx-auto my-3 width-100 g-4"><div class="col-6"><label for="name">Name</label><input type="text" id="name-signUp" placeholder="John Doe" class="form-control bg-transparent white-placeholder solid-primary text-light"></div><div class="col-6"><label for="password">Password</label><input type="password" id="password-signUp" placeholder="your password" class="form-control bg-transparent white-placeholder solid-primary text-light"></div><div class="col-6"><label for="tel">Phone</label><input type="tel" id="phone-signUp" placeholder="your Phone" class="form-control bg-transparent white-placeholder solid-primary text-light"></div><div class="col-6"><label for="email">Email</label><input type="email" id="email-signUp" placeholder="ymuhammadidris@gmail.com" class="form-control bg-transparent white-placeholder solid-primary text-light"></div><div class="col-12"><button type="button" id="signUp-submit" class="button-primary w-100 p-1">Sign Up</button></div><p class="col-12 text-center mb-0">or</p><div class="col-12"><button type="button" class="loginBtn button-transparent w-100 p-1">Login</button></div></form></section>`;

  $('main').append(login, signUp);
}

function signUp() {
  let name = $('#name-signUp').val();
  let password = $('#password-signUp').val();
  let tel = $('#phone-signUp').val();
  let email = $('#email-signUp').val();

  let dataUser = user.filter((u) => u.name == name);

  if (!dataUser.length) {
    user.push({ name, password, tel, email });
    data.push(user[0]);
    alert("successfully sign up")
    $('#name-signUp').val("");
    $('#password-signUp').val("");
    $('#phone-signUp').val("");
    $('#email-signUp').val("");
    $('#signUp').removeClass('show');
    succesLogin();
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
    succesLogin();
    // console.log("data user" + JSON.stringify(dataUser));
  } else {
    $('#name-login').val("");
    $('#password-login').val("");
    alert("Invalid email or password!");
  }
}

function succesLogin() {
  $('#account-notnull').show();
  $('#account-null, #login, #signUp').hide();
  console.log("aaaa" + data);
  $('#user-name').text(data[0].name);
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
    let card = "<div id='" + menu[category][index].id + "' class='card-menu bg-transparent border border-0'>" + cardImg + div + "</div>";
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
  // $('.product-profile').attr('id', product[0].id)
  $('.product-name').text(product[0].name);
  $('.product-name').attr('id', product[0].id);
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

function plus() {
  $('#plus').click(function () {
    let quantity = $('#quantity').text();
    $('#quantity').text(++quantity);
  })
}

function minus() {
  $('#minus').click(function () {
    let quantity = $('#quantity').text();
    if (quantity > 0)
      $('#quantity').text(--quantity);
  })
}

function addMenu(id) {
  let quantity = $('#quantity').text();
  let productId = id;
  let dataProduct;
  if (quantity != 0) {
    dataProduct = searchMenu(productId);
    data[0].chart.push(dataProduct[0]);

    data[0].chart[data[0].chart.length - 1]['quantity'] = quantity;
    $('#product').removeClass('show');
    $('main>section>*:not(#product), footer').css({
      "filter": 'blur(0px)',
      "pointer-events": 'auto',
      "user-select": 'auto'
    });
    chart();
  }
}

function searchMenu(id) {
  let dataProduct;

  dataProduct = menu.breakfast.filter((p) => p.id == id);
  if (dataProduct != undefined) { return dataProduct; }

  dataProduct = menu.lunch.filter((p) => p.id == id);
  if (dataProduct != undefined) { return dataProduct; }

  dataProduct = menu.dinner.filter((p) => p.id == id);
  if (dataProduct != undefined) { return dataProduct; }

  dataProduct = menu.dessert.filter((p) => p.id == id);
  if (dataProduct != undefined) { return dataProduct; }

  dataProduct = menu.drink.filter((p) => p.id == id);
  if (dataProduct != undefined) { return dataProduct; }
}

function chart() {
  $('.chart-items').text("");
  if (user[0].chart.length == 0) {
    let kosong = "<li class='text-center'>Chart is empty</li>";
    $('#checkoutChart').hide();
    $('#deleteChart').hide();
    $('.chart-items').append(kosong);
    return;
  }
  $('#deleteChart').show();
  $('#checkoutChart').show();
  $('#checkoutChart').prop('disabled', false);
  let price = 0;
  for (let index = 0; index < data[0].chart.length; index++) {
    let img = "<img src='" + data[0].chart[index].img + "' class='col-4 object-fit-cover h-100 rounded p-0 img-hover' alt=''>";
    let chartItemName = "<p class='size-12 line-height-20 m-0'>" + data[0].chart[index].name + "</p>";
    let chartDetail = "<p class='size-12 line-height-20 m-0 color-primary'>" + data[0].chart[index].quantity + " x " + data[0].chart[index].price + "</p>";
    let div = "<div class='col d-flex flex-column align-items-end p-0 text-end'>" + chartItemName + chartDetail + "</div>";
    let chartItem = "<div class='chart-item row d-flex align-items-center justify-content-center p-1 my-2'>" + img + div + "</div>";
    $('.chart-items').append(chartItem);
  }
  for (let index = 0; index < data[0].chart.length; index++) {
    price += (data[0].chart[index].price * data[0].chart[index].quantity);
  }
  let total = "<li><h3 id='total-price' class='color-primary text-center size-18 mt-3'>Total : $ " + Math.round(price) + "</h3></li>";
  $('.chart-items').append(total);
}

function address() {
  let name = $("#name-address").val();
  let email = $('#email-address').val();
  let phone = $('#phone-address').val();
  let address = $('#location-address').val();
  if (!name || !email || !phone || !address) {
    swal('Please Input Correctly');
  } else {
    $('#nameAddress').text(name);
    $('#phoneAddress').text(phone);
    $('#locationAddress').text(address);

    $('#address').removeClass('show');
  }
}

function note() {
  let note = $('#note-content').val();
  if (!note) {
    swal('Please Input Correctly');
  } else {
    $('#note-note').show();
    $('note-note').text(note);
    $('#note').removeClass('show');
  }
}

function paymentt() {
  console.log(payment[0]);
  for (let index = 0; index < payment.length; index++) {
    let opt = "<option value='" + index + "' class='text-dark'>" + payment[index] + "</option>";
    $('#payment-method').append(opt);
  }
}

function bookATable() {
  let name = $('#name').val();
  let location = $('#location').val();
  let numberPeople = $('#numberPeople').val();
  let time = $('#time').val();

  user[0].pendingOrders.table.push({
    orderId: user[0].pendingOrders.table.length,
    name: name,
    location: location,
    people: numberPeople,
    time: time,
  });
  console.log(user[0].pendingOrders.table[user[0].pendingOrders.table.length - 1]);
}

function deleteChart() {
  data[0].chart.length = 0;
  chart();
}


export { openSidebarListener, openChartListener, pageLoad, openProduct, plus, minus, signUp, login, addMenu, address, note, bookATable, deleteChart };