// Deklarasi Nilai
let nilaiPertama = null,
  nilaiKedua = null,
  aksiOperator = null,
  hasil = null;

// button angka
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn0 = document.querySelector(".btn-0");
const display = document.querySelector(".display");
const opt = document.querySelector(".opt");

// button operator
const btnSamaDengan = document.querySelector(".btn-samadengan");
const btnTambah = document.querySelector(".btn-tambah");
const btnKurang = document.querySelector(".btn-kurang");
const btnBagi = document.querySelector(".btn-bagi");
const btnKali = document.querySelector(".btn-kali");
const btnClear = document.querySelector(".btn-clear");

btn7.addEventListener("click", function () {
  inputDigit(7);
});
btn8.addEventListener("click", function () {
  inputDigit(8);
});
btn9.addEventListener("click", function () {
  inputDigit(9);
});
btn4.addEventListener("click", function () {
  inputDigit(4);
});
btn5.addEventListener("click", function () {
  inputDigit(5);
});
btn6.addEventListener("click", function () {
  inputDigit(6);
});
btn1.addEventListener("click", function () {
  inputDigit(1);
});
btn2.addEventListener("click", function () {
  inputDigit(2);
});
btn3.addEventListener("click", function () {
  inputDigit(3);
});
btn0.addEventListener("click", function () {
  inputDigit(0);
});

// operator
btnSamaDengan.addEventListener("click", function () {
  if (aksiOperator == null) {
    alert("Masukan Operator Terlebih Dahulu!!");
  } else {
    opt.innerHTML = 0;
    hasilAksi();
  }
});
btnTambah.addEventListener("click", function () {
  operator("+");
});
btnKurang.addEventListener("click", function () {
  operator("-");
});
btnBagi.addEventListener("click", function () {
  operator("/");
});
btnKali.addEventListener("click", function () {
  operator("x");
});
btnClear.addEventListener("click", function () {
  clear();
});

// Input Digit
function inputDigit(btn) {
  if (display.innerHTML == 0) {
    display.innerHTML = btn;
    if (opt.innerHTML == 0) {
      opt.innerHTML = btn;
      hasil = null;
    } else {
      updateDisplayBawah(btn);
    }
  } else {
    if (opt.innerHTML == 0) {
      updateDisplayAtas(btn);
      opt.innerHTML = display.innerHTML;
      hasil = null;
    } else {
      updateDisplayAtas(btn);
    }

    checkDisplay();
  }
}

// Display Digit
function updateDisplayAtas(inp) {
  display.innerHTML = display.innerHTML + inp;
  opt.innerHTML = opt.innerHTML + inp;
}
function updateDisplayBawah(inp) {
  opt.innerHTML = opt.innerHTML + inp;
}

// Operator
function operator(optr) {
  aksi();
  display.innerHTML = 0;
  aksiOperator = optr;
  if (hasil != null) {
    opt.innerHTML = hasil + " " + optr + " ";
  } else {
    opt.innerHTML = opt.innerHTML + " " + optr + " ";
  }
}
function aksi() {
  if (nilaiPertama == null) {
    nilaiPertama = display.innerHTML;
  } else {
    nilaiKedua = display.innerHTML;
  }
}
function hasilAksi() {
  nilaiKedua = display.innerHTML;

  if (aksiOperator == "+") {
    hasil = parseInt(nilaiPertama) + parseInt(nilaiKedua);
  } else if (aksiOperator == "-") {
    hasil = parseInt(nilaiPertama) - parseInt(nilaiKedua);
  } else if (aksiOperator == "/") {
    hasil = parseInt(nilaiPertama) / parseInt(nilaiKedua);
  } else if (aksiOperator == "x") {
    hasil = parseInt(nilaiPertama) * parseInt(nilaiKedua);
  }
  nilaiPertama = null;
  nilaiKedua = null;
  aksiOperator = null;
  display.innerHTML = hasil;
}

// Check Display
function checkDisplay() {
  const panjang = display.innerHTML;
  if (panjang.length > 8) {
    display.classList.remove("font-70");
    display.classList.add("font-40");
  }
}

function clear() {
  display.innerHTML = 0;
  opt.innerHTML = 0;
  nilaiPertama = null;
  nilaiKedua = null;
  aksiOperator = null;
  hasil = null;
}
