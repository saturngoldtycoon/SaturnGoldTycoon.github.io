// 1. Grab the elements from your HTML page
var osDropdown = document.getElementById('os');
var issueDropdown = document.getElementById('issue');
var priceLabel = document.getElementById('total-price');

// 2. Create the function that does the math
function calculate() {
    var osPrice = Number(osDropdown.value);
    var issuePrice = Number(issueDropdown.value);
    var finalTotal = osPrice + issuePrice;
    
    priceLabel.innerText = "Estimated Cost: $" + finalTotal;
}

// 3. Tell both dropdowns to run the math function whenever they change
osDropdown.addEventListener('change', calculate);
issueDropdown.addEventListener('change', calculate);
