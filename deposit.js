/*
1. add event listener to the deposit button
2. get input value from deposit input box
2.5: convert string to number using parseFloat
3. clear the input filed value with empty string


4. get the top/previous deposit total
4.5: convert string to number using parseFloat

5. calculate previous deposit total with new deposit total


6. get the balance total
6.5. convert string to number using parseFloat

7. calculate deposit amount with balance total
*/
// step 1
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step 2 and 2.5
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step 3  clear the input filed
  depositField.value = "";

  //   step 4 and 4.5
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositString = depositTotalElement.innerText;
  const previousDeposit = parseFloat(previousDepositString);

  // step 5
  const newDepositTotal = previousDeposit + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  // step 6 and 6.5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalnaceTotal = parseFloat(previousBalanceTotalString);

  // step 7
  const newBalanceTotal = previousBalnaceTotal + newDepositAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
