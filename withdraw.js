/*
1. add event handler to the withdraw button
2. get the withdraw input value

3. get the withdraw total amount using innerText

4. calculate total withdraw amount

5. reduce withdraw total from balance total

6. calculate new balance total after withdrawal

*/
// step 1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step 2
  const withdrawField = document.getElementById("withdraw-filed");
  const previousWithdrawString = withdrawField.value;
  const neWithdraw = parseFloat(previousWithdrawString);
  withdrawField.value = "";

  //   step 3
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step 4
  const newWithdrawTotal = previousWithdrawTotal + neWithdraw;
  withdrawTotalElement.innerText = newWithdrawTotal;

  //   step 5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //   step 6

  const newBalanceTotal = previousBalanceTotal - neWithdraw;
  balanceTotalElement.innerText = newBalanceTotal;
});
