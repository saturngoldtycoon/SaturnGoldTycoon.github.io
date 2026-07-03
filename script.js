window.addEventListener('DOMContentLoaded', () => {
    var issueSelect = document.getElementById('issue');
    var totalDisplay = document.getElementById('total-price');
    var quoteForm = document.getElementById('quote-form');

    var TRAVEL_FEE = 25;

    function updateEstimate() {
        var issueCost = Number(issueSelect.value);
        var finalPrice = issueCost + TRAVEL_FEE;
        totalDisplay.innerText = "$" + finalPrice;
    }

    issueSelect.addEventListener('change', updateEstimate);

    // Fill and submit
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Set hidden field values
        document.getElementById('hidden-issue').value = issueSelect.selectedOptions[0].text;
        document.getElementById('hidden-total').value = totalDisplay.innerText;

        // Submit form after values are set
        setTimeout(function() {
            quoteForm.submit();
        }, 10);
    });

    updateEstimate();
});
