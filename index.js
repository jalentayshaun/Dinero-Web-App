// Calculate Income
var hourlyWage = document.querySelector("#income .hourly-wage input");
var hoursWorked = document.querySelector("#income .hours-worked input");
var incomeButton = document.querySelector("#income .calculate button");
var incomeResult = document.querySelector("#income .calculate .total");

incomeButton.addEventListener("click", function() {
    var totalIncome = hourlyWage.valueAsNumber * hoursWorked.valueAsNumber;
    incomeResult.textContent = "$" + totalIncome;
});

// Calculate Bills
var billAmount = document.querySelector(".bill-item-container input[type='checkbox']:checked ~ .bill-amount");
var billsButton = document.querySelector("#bills .calculate button");
var billsResult = document.querySelector("#bills .calculate .total");

function calculateBills() {
    var billList = document.querySelectorAll(".bill-item-container input[type='checkbox']:checked");
    for(var i = 0; i < billList.length; i++) {

    }
}

// Calculate Budget & Summary
var budgetButton = document.querySelector("#budget .calculate button");;

function calculateBudget() {
    
}