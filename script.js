window.addEventListener('DOMContentLoaded', () => {
    var osSelect = document.getElementById('os');
    var issueSelect = document.getElementById('issue');
    var totalDisplay = document.getElementById('total-price');
    var quoteForm = document.getElementById('quote-form');

    function updateEstimate() {
        var baseCost = Number(osSelect.value);
        var addedCost = Number(issueSelect.value);
        var finalPrice = baseCost + addedCost;
        totalDisplay.innerText = "$" + finalPrice;
    }

    osSelect.addEventListener('change', updateEstimate);
    issueSelect.addEventListener('change', updateEstimate);

    // Fill and submit
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Set hidden field values
        document.getElementById('hidden-os').value = osSelect.selectedOptions[0].text;
        document.getElementById('hidden-issue').value = issueSelect.selectedOptions[0].text;
        document.getElementById('hidden-total').value = totalDisplay.innerText;
        
        // Submit form after values are set
        setTimeout(function() {
            quoteForm.submit();
        }, 10);
    });

    updateEstimate();
});
