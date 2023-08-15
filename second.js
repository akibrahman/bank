let totalDepositAmount = 0;
let totalBalanceAmount = 1000;
let totalWithdrawAmount = 0;

const depositField = document.getElementById("totalDeposit");
const balanceField = document.getElementById("balance");
const withdrawField = document.getElementById("totalWithdraw");
const newDepositInput = document.getElementById("deposit");
const newWithdrawInput = document.getElementById("withdraw");
const newDepositSubmit = document.getElementById("depositSubmit");
const newWithdrawSubmit = document.getElementById("withdrawSubmit");

depositField.innerText = totalDepositAmount;
balanceField.innerText = totalBalanceAmount;
withdrawField.innerText = totalWithdrawAmount;

newDepositSubmit.addEventListener("click", () => {
  if (newDepositInput.value == "0") {
    alert("Deposit Amount Cann't be 0!");
    newDepositInput.value = "";
    return;
  } else if (newDepositInput.value == "") {
    alert("Enter Deposit Amount!");
    return;
  }
  totalDepositAmount += parseInt(newDepositInput.value);
  totalBalanceAmount += parseInt(newDepositInput.value);
  depositField.innerText = totalDepositAmount;
  balanceField.innerText = totalBalanceAmount;
  newDepositInput.value = "";
});
newDepositInput.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    if (newDepositInput.value == "0") {
      alert("Withdraw Amount Cann't be 0!");
      newDepositInput.value = "";
      return;
    } else if (newDepositInput.value == "") {
      alert("Enter Withdraw Amount!");
      return;
    }
    totalDepositAmount += parseInt(newDepositInput.value);
    totalBalanceAmount += parseInt(newDepositInput.value);
    depositField.innerText = totalDepositAmount;
    balanceField.innerText = totalBalanceAmount;
    newDepositInput.value = "";
  }
  return;
});

newWithdrawSubmit.addEventListener("click", () => {
  if (parseInt(newWithdrawInput.value) > totalBalanceAmount) {
    alert("Tomar Account e Eto Taka Nei!");
    newWithdrawInput.value = "";
    return;
  } else if (newWithdrawInput.value == "") {
    alert("Enter Amount!");
    return;
  } else if (newWithdrawInput.value == "0") {
    alert("Entered Amount Cann't be 0!");
    newWithdrawInput.value = "";
    return;
  }
  totalWithdrawAmount += parseInt(newWithdrawInput.value);
  totalBalanceAmount -= parseInt(newWithdrawInput.value);
  withdrawField.innerText = totalWithdrawAmount;
  balanceField.innerText = totalBalanceAmount;
  newWithdrawInput.value = "";
});
newWithdrawInput.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    if (parseInt(newWithdrawInput.value) > totalBalanceAmount) {
      alert("Tomar Account e Eto Taka Nei!");
      newWithdrawInput.value = "";
      return;
    } else if (newWithdrawInput.value == "") {
      alert("Enter Amount!");
      return;
    } else if (newWithdrawInput.value == "0") {
      alert("Entered Amount Cann't be 0!");
      return;
    }
    totalWithdrawAmount += parseInt(newWithdrawInput.value);
    totalBalanceAmount -= parseInt(newWithdrawInput.value);
    withdrawField.innerText = totalWithdrawAmount;
    balanceField.innerText = totalBalanceAmount;
    newWithdrawInput.value = "";
  }
  return;
});
