window.addEventListener('DOMContentLoaded', () => {
    // Selectors
    var osSelect = document.getElementById('os');
    var issueSelect = document.getElementById('issue');
    var totalDisplay = document.getElementById('total-price');
    var quoteForm = document.getElementById('quote-form');

    // Calculate and display price
    function updateEstimate() {
        var baseCost = Number(osSelect.value);
        var addedCost = Number(issueSelect.value);
        var finalPrice = baseCost + addedCost;
        totalDisplay.innerText = "$" + finalPrice;
    }

    // Update on select changes
    osSelect.addEventListener('change', updateEstimate);
    issueSelect.addEventListener('change', updateEstimate);

    // Fill hidden fields before form submission
    quoteForm.addEventListener('submit', function() {
        document.getElementById('hidden-os').value = osSelect.selectedOptions[0].text;
        document.getElementById('hidden-issue').value = issueSelect.selectedOptions[0].text;
        document.getElementById('hidden-total').value = totalDisplay.innerText;
    });

    // Initialize price on page load
    updateEstimate();
});
