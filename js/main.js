// DOM
// console.log(window);
// const Form = document.getElementById("myForm");
// const Form2 = document.querySelector(".form-group");

// const Inputs = document.querySelectorAll(".form-control");

// console.log(Form2);
// console.log(Inputs);

// Inputs.forEach(function(input) {
//   console.log(input);
// });

// DOM Manipulation
// const ul = document.querySelector('.items');
// console.log(ul);
// ul.remove();
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'My Love Anne';
// ul.children[1].innerText = 'Hello';
// ul.lastElementChild.innerHTML = '<h1>ILOVEANNE</h1>';

// const btn = document.querySelector('#btn');

// btn.style.background = 'red';

// DOM Events
const Form = document.querySelector("#myForm");
const button = document.querySelector('#btn');
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const msg = document.querySelector("#msg");

// button.addEventListener('click', function(e) {
//   e.preventDefault();
//   // console.log('Pedro pindutin mo');
//   input.style.background = "black";
// });

button.addEventListener('click', function(e) {
  e.preventDefault();

  if (username.value.length === 0 || password.value.length === 0) {
    // console.log("false");
    msg.innerHTML = "<h1 class='error'>Empty Field</h1>";
    setTimeout(() => document.querySelector(".error").remove(), 3000);
  } else {
    // console.log("true");
    // msg.innerHTML = "OK";
    Form.submit();
  }

});