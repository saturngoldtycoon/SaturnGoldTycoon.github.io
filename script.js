// ==================================================== 
// NEW CODE: CALCULATOR SCRIPT APPENDED AT THE BOTTOM
// ==================================================== 

// 1. Grab our calculator elements from the page
var osSelect = document.getElementById('os');
var issueSelect = document.getElementById('issue');
var totalDisplay = document.getElementById('total-price');

// 2. Run the mathematical addition
function updateEstimate() {
    var baseCost = Number(osSelect.value);
    var addedCost = Number(issueSelect.value);
    var finalPrice = baseCost + addedCost;
    
    totalDisplay.innerText = "$" + finalPrice;
}

// 3. Watch for changes on the dropdown menus
osSelect.addEventListener('change', updateEstimate);
issueSelect.addEventListener('change', updateEstimate);
