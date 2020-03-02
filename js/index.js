const inputOne = document.querySelector("#input1");
const inputTwo = document.querySelector("#input2");
const inputThree = document.querySelector("#input3");

const checkOne = document.querySelector("#check1");
const checkTwo = document.querySelector("#check2");
const checkThree = document.querySelector("#check3");

checkOne.onchange = function() {
  inputOne.disabled = !this.checked;
};

checkTwo.onchange = function() {
  inputTwo.disabled = !this.checked;
};

checkThree.onchange = function() {
  inputThree.disabled = !this.checked;
};

// jika user hanya memilih satu checkbox
// maka peringatkan user untuk memilih lebih dari satu
const checky = document.querySelectorAll(".checky");
const error = document.querySelector(".error");
for (let i = 0; i < checky.length; i++) {
  checky[i].onclick = function(event) {
    let checked = document.querySelectorAll(".checky:checked");
    if (checked.length == 1) {
      error.style.display = "block";
    } else {
      error.style.display = "none";
    }
  };
}

let hitung = pilihan => {
  let inputTextOne = parseInt(inputOne.value);
  let inputTextTwo = parseInt(inputTwo.value);
  let inputTextThree = parseInt(inputThree.value);

  let hasil;
  let p = pilihan;
  switch (p) {
    case "+":
      if (inputThree.disabled) {
        hasil = inputTextOne + inputTextTwo;
      } else {
        hasil = inputTextOne + inputTextTwo + inputTextThree;
      }
      break;
    case "-":
      if (inputThree.disabled) {
        hasil = inputTextOne - inputTextTwo;
      } else {
        hasil = inputTextOne - inputTextTwo - inputTextThree;
      }
      break;
    case "x":
      if (inputThree.disabled) {
        hasil = inputTextOne * inputTextTwo;
      } else {
        hasil = inputTextOne * inputTextTwo * inputTextThree;
      }
      break;
    case "/":
      if (inputThree.disabled) {
        hasil = inputTextOne / inputTextTwo;
      } else {
        hasil = inputTextOne / inputTextTwo / inputTextThree;
      }
      break;
  }
  document.querySelector(".result").innerHTML = hasil;
  console.log(hasil);
};