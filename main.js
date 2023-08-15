tailwind.config = {
  theme: {
    extend: {
      backgroundImage: {
        main: "url('./assets/bank.png')",
      },
      colors: {
        "border-color": "rgba(255,255,255,0.3)",
      },
    },
  },
};

//!Login Part
const userName = document.getElementById("userName");
const userPass = document.getElementById("userPass");
const submit = document.getElementById("submit");
const eyeBtn = document.getElementById("eye");
let eyeOpen = false;

eyeBtn.addEventListener("click", () => {
  if (eyeOpen == false) {
    userPass.type = "text";
    eyeBtn.classList.remove("fa-eye-slash");
    eyeBtn.classList.add("fa-eye");
    eyeOpen = true;
    return;
  } else if (eyeOpen == true) {
    userPass.type = "password";
    eyeBtn.classList.add("fa-eye-slash");
    eyeBtn.classList.remove("fa-eye");
    eyeOpen = false;
    return;
  }
});

submit.addEventListener("click", function () {
  if (userName.value == "akib@gmail.com") {
    userName.classList.add("border-border-color");
    userName.classList.remove("border-red-500");
    if (userPass.value == "1234") {
      window.location.replace("./bank.html");
      //   window.location.href = "./bank.html";
    }
  }
  if (userName.value != "akib@gmail.com" && userPass.value != "1234") {
    userName.classList.remove("border-border-color");
    userName.classList.add("border-red-500");
    userPass.classList.remove("border-border-color");
    userPass.classList.add("border-red-500");
  } else if (userName.value != "akib@gmail.com") {
    userName.classList.remove("border-border-color");
    userName.classList.add("border-red-500");
  } else if (userPass.value != "1234") {
    userPass.classList.remove("border-border-color");
    userPass.classList.add("border-red-500");
  }
});

//!Main Part

let totalDepositAmount = 1000;
let totalBalanceAmount = 1000;
let totalWithdrawAmount = 1000;

const totalDeposit = document.getElementById("totalDeposit");
const totalBalance = document.getElementById("balance");
const totalWithdraw = document.getElementById("totalWithdraw");
const newDeposit = document.getElementById("deposit");
const newWithdraw = document.getElementById("withdraw");
const t = document.getElementById("test");

t.addEventListener("click", () => {
  console.log("first");
});
