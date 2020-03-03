// deklarasi variabel
const inputOne = document.querySelector("#input1");
const inputTwo = document.querySelector("#input2");
const inputThree = document.querySelector("#input3");
const checkOne = document.querySelector("#check1");
const checkTwo = document.querySelector("#check2");
const checkThree = document.querySelector("#check3");

let errorHasil = "Tidak ada hasil, masukkan minimal 2 masukkan";

// jika checkbox dipilih, maka input yang disabled akan di-enable kembali
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

// fungsi perhitungan
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
      } else if (inputTwo.disabled) {
        hasil = inputTextOne + inputTextThree;
      } else if (inputOne.disabled) {
        hasil = inputTextTwo + inputTextThree;
      } else if (inputOne.disabled && inputTwo.disabled) {
        hasil = errorHasil;
      } else if (inputTwo.disabled && inputThree.disabled) {
        hasil = errorHasil;
      } else if (inputOne.disabled && inputThree.disabled) {
        hasil = errorHasil;
      } else {
        hasil = inputTextOne + inputTextTwo + inputTextThree;
      }
      break;
    case "-":
      if (inputThree.disabled) {
        hasil = inputTextOne - inputTextTwo;
      } else if (inputTwo.disabled) {
        hasil = inputTextOne - inputTextThree;
      } else if (inputOne.disabled) {
        hasil = inputTextTwo - inputTextThree;
      } else if (inputOne.disabled && inputTwo.disabled) {
        hasil = errorHasil;
      } else if (inputTwo.disabled && inputThree.disabled) {
        hasil = errorHasil;
      } else if (inputOne.disabled && inputThree.disabled) {
        hasil = errorHasil;
      } else {
        hasil = inputTextOne - inputTextTwo - inputTextThree;
      }
      break;
    case "x":
      if (inputThree.disabled) {
        hasil = inputTextOne * inputTextTwo;
      } else if (inputTwo.disabled) {
        hasil = inputTextOne * inputTextThree;
      } else if (inputOne.disabled) {
        hasil = inputTextTwo * inputTextThree;
      } else if (inputOne.disabled && inputTwo.disabled) {
        hasil = errorHasil;
      } else if (inputTwo.disabled && inputThree.disabled) {
        hasil = errorHasil;
      } else if (inputOne.disabled && inputThree.disabled) {
        hasil = errorHasil;
      } else {
        hasil = inputTextOne * inputTextTwo * inputTextThree;
      }
      break;
    case "/":
      if (inputThree.disabled) {
        hasil = inputTextOne / inputTextTwo;
      } else if (inputTwo.disabled) {
        hasil = inputTextOne / inputTextThree;
      } else if (inputOne.disabled) {
        hasil = inputTextTwo / inputTextThree;
      } else if (inputOne.disabled && inputTwo.disabled) {
        hasil = errorHasil;
      } else if (inputTwo.disabled && inputThree.disabled) {
        hasil = errorHasil;
      } else if (inputOne.disabled && inputThree.disabled) {
        hasil = errorHasil;
      } else {
        hasil = inputTextOne / inputTextTwo / inputTextThree;
      }
      break;
  }
  document.querySelector(".result").innerHTML = hasil;
  console.log(hasil);
};
