window.addEventListener('DOMContentLoaded', () => {
    var osSelect = document.getElementById('os');
    var issueSelect = document.getElementById('issue');
    var totalDisplay = document.getElementById('total-price');

    function updateEstimate() {
        var baseCost = Number(osSelect.value);
        var addedCost = Number(issueSelect.value);
        var finalPrice = baseCost + addedCost;
        
        totalDisplay.innerText = "$" + finalPrice;
    }

    osSelect.addEventListener('change', updateEstimate);
    issueSelect.addEventListener('change', updateEstimate);
});
