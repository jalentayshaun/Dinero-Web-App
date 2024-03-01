// Light/Dark Mode
document.querySelector(".light-mode button").addEventListener("click", function() {
    // Body Background
    document.querySelector("body").classList.toggle("light-background");
    document.querySelector(".mode").classList.toggle("light-mode");
    document.querySelector(".mode").classList.toggle("night-mode");

    // Light mode button
    var lightModeImage = document.querySelector(".mode button img");

    if (lightModeImage.getAttribute("src") == "./assets/svgs/brightness-high.svg") {
        lightModeImage.setAttribute("src", "./assets/svgs/moon-stars.svg");
    }
    else if (lightModeImage.getAttribute("src") == "./assets/svgs/moon-stars.svg") {
        lightModeImage.setAttribute("src", "./assets/svgs/brightness-high.svg");
    }
});

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
    if (groceries.innerHTML > 200) {
        groceries.innerHTML = 200;
    }

    eatingOut.innerHTML = incomeAfterBills * 0.15;
    if (eatingOut.innerHTML > 75) {
        eatingOut.innerHTML = 75;
    }

    personal.innerHTML = incomeAfterBills * 0.15;
    if (personal.innerHTML > 100) {
        personal.innerHTML = 100;
    }

    laundry.innerHTML = incomeAfterBills * 0.05;
    if (laundry.innerHTML > 25) {
        laundry.innerHTML = 25;
    }

    budgetResults.innerHTML = parseInt(groceries.innerHTML) + parseInt(eatingOut.innerHTML) + parseInt(personal.innerHTML) + parseInt(laundry.innerHTML);

    // Calculate and Print Remainder
    var remainder = document.querySelector(".remainder");
    var remainderTotal = incomeAfterBills - (budgetResults.innerHTML);
    remainder.innerHTML = remainderTotal;

    printSummary();
}

// Print Summary from Budget
function printSummary() {

}