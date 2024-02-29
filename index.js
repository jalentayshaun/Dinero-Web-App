// Calculate Income
var incomeButton = document.querySelector("#income button");
var incomeResult = document.querySelector("#income .total");

incomeButton.addEventListener("click", calculateIncome);

function calculateIncome() {
    var hourlyWage = document.querySelector(".hourly-wage input");
    var hoursWorked = document.querySelector(".hours-worked input");
    var totalIncome = hourlyWage.valueAsNumber * hoursWorked.valueAsNumber;

    incomeResult.textContent = totalIncome;
    return totalIncome;
}

// Calculate Bills
var billsButton = document.querySelector("#bills button");
var billsResult = document.querySelector("#bills .total");

billsButton.addEventListener("click", calculateBills);

function calculateBills() {
    var billList = document.querySelectorAll(".bill-item-container > div > input[type='checkbox']:checked ~ div.bill-amount");
    var billTotal = 0;
    for(var i = 0; i < billList.length; i++) {
        billTotal += parseFloat(billList[i].innerHTML);
    }
    billsResult.textContent = billTotal;
    return billTotal;
}

// Calculate Budget & Summary
var budgetButton = document.querySelector("#budget button");
var budgetResults = document.querySelector("#budget .total");

budgetButton.addEventListener("click", calculateBudget);

function calculateBudget() {
    var groceries = document.querySelector(".groceries");
    var eatingOut = document.querySelector(".eating-out");
    var personal = document.querySelector(".personal");
    var laundry = document.querySelector(".laundry");

    var incomeAfterBills = parseFloat(incomeResult) - parseFloat(billsResult);
    groceries.innerHTML = incomeAfterBills * 0.25;
}