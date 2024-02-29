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
    var incomeAfterBills = Math.round(incomeResult.value) - Math.round(billsResult.value);
    var groceries = document.querySelector(".groceries");
    var eatingOut = document.querySelector(".eating-out");
    var personal = document.querySelector(".personal");
    var laundry = document.querySelector(".laundry");

    groceries.innerHTML = incomeAfterBills * 0.25;
    if (groceries.innerHTML > 150) {
        groceries.innerHTML = 150;
    }

    eatingOut.innerHTML = incomeAfterBills * 0.15;
    if (eatingOut.innerHTML > 50) {
        eatingOut.innerHTML = 50;
    }

    personal.innerHTML = incomeAfterBills * 0.15;
    if (personal.innerHTML > 75) {
        personal.innerHTML = 75;
    }

    laundry.innerHTML = incomeAfterBills * 0.05;
    if (laundry.innerHTML > 20) {
        laundry.innerHTML = 20;
    }

    budgetResults.innerHTML = parseInt(groceries.innerHTML) + parseInt(eatingOut.innerHTML) + parseInt(personal.innerHTML) + parseInt(laundry.innerHTML);

    // Calculate and Print Remainder
    var remainder = document.querySelector(".remainder");
    var remainderTotal = incomeAfterBills - (budgetResults.innerHTML);
    remainder.innerHTML = remainderTotal;

    printSummary();
}

function printSummary() {

}