// Wait until the browser completely maps the layout structure
window.addEventListener('DOMContentLoaded', () => {

    // 1. Core Interactive Elements
    var myButton = document.getElementById('action-btn');
    var myMessage = document.getElementById('message');

    // 2. Calculator Selectors
    var osSelect = document.getElementById('os');
    var issueSelect = document.getElementById('issue');
    var totalDisplay = document.getElementById('total-price');

    // 3. Simple Button Status Message Function
    myButton.addEventListener('click', function() {
        myMessage.innerText = "Opening Stream Connection ⚡";
    });

    // 4. Mathematical Addition Logic Function
    function updateEstimate() {
        var baseCost = Number(osSelect.value);
        var addedCost = Number(issueSelect.value);
        var finalPrice = baseCost + addedCost;
        
        totalDisplay.innerText = "$" + finalPrice;
    }

    // 5. Explicitly watch the selectors for real-time interactions
    osSelect.addEventListener('change', updateEstimate);
    issueSelect.addEventListener('change', updateEstimate);

});
