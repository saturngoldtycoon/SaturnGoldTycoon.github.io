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
document.getElementById('quote-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('customer-name').value;
    const email = document.getElementById('customer-email').value;
    const notes = document.getElementById('customer-notes').value;
    const total = document.getElementById('total-price').textContent;
    const osLabel = document.getElementById('os').selectedOptions[0].text;
    const issueLabel = document.getElementById('issue').selectedOptions[0].text;

    const submitBtn = document.getElementById('submit-btn');
    const msg = document.getElementById('form-message');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
        const response = await fetch('https://formspree.io/f/xwvdelgl', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(document.getElementById('quote-form')) instanceof FormData
                ? (() => {
                    const fd = new FormData();
                    fd.append('Name', name);
                    fd.append('Email', email);
                    fd.append('Notes', notes);
                    fd.append('OS', osLabel);
                    fd.append('Issue', issueLabel);
                    fd.append('Total Quote', total);
                    return fd;
                })()
                : null
        });

        if (response.ok) {
            msg.textContent = "Thanks! We'll be in touch shortly.";
            document.getElementById('quote-form').reset();
        } else {
            msg.textContent = "Something went wrong — please try again.";
        }
    } catch (err) {
        msg.textContent = "Something went wrong — please try again.";
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Request This Quote';
    }
});
