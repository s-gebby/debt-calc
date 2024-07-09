// script.js
document.getElementById("debt-form").addEventListener("submit", addDebt);
document
  .getElementById("calculate-btn")
  .addEventListener("click", calculateTotalDebt);

let debts = [];

function addDebt(event) {
  event.preventDefault();

  const debtSource = document.getElementById("debt-source").value;
  const debtAmount = parseFloat(document.getElementById("debt-amount").value);

  if (debtSource && debtAmount) {
    debts.push({ source: debtSource, amount: debtAmount });
    displayDebtItems(debts);

    document.getElementById("debt-form").reset();
  }
}

function displayDebtItems(debts) {
  const debtList = document.getElementById("debt-list");
  debtList.innerHTML = "";
  debts.forEach((debt) => {
    const debtItem = document.createElement("div");
    debtItem.innerText = `${debt.source}: $${debt.amount.toFixed(2)}`;
    debtList.appendChild(debtItem);
  });
}

function calculateTotalDebt() {
  const totalDebt = debts.reduce((total, debt) => total + debt.amount, 0);
  document.getElementById("total-debt").innerText = `$${totalDebt.toFixed(2)}`;
}
