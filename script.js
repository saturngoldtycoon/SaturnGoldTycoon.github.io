document.addEventListener('DOMContentLoaded', () => {
    // 1. Create a container for the calculator widget
    const calculatorBox = document.createElement('div');
    calculatorBox.id = 'recovery-calc';
    calculatorBox.style.border = '3px solid #f7df1e'; // JS Yellow
    calculatorBox.style.padding = '20px';
    calculatorBox.style.margin = '20px auto';
    calculatorBox.style.maxWidth = '450px';
    calculatorBox.style.fontFamily = 'sans-serif';
    calculatorBox.style.borderRadius = '10px';
    calculatorBox.style.backgroundColor = '#1e1e1e';
    calculatorBox.style.color = '#ffffff';

    // 2. Add the title
    const title = document.createElement('h2');
    title.innerText = '⚙️ SGT-Tech OS Recovery Estimator';
    title.style.textAlign = 'center';
    title.style.color = '#f7df1e';
    calculatorBox.appendChild(title);

    // 3. Dropdown Menu for Operating System Choice
    const osLabel = document.createElement('label');
    osLabel.innerText = 'Select Operating System:';
    osLabel.style.display = 'block';
    osLabel.style.marginBottom = '5px';
    calculatorBox.appendChild(osLabel);

    const selectOS = document.createElement('select');
    selectOS.style.width = '100%';
    selectOS.style.padding = '8px';
    selectOS.style.marginBottom = '15px';
    
    // Create options for OS
    const osOptions = [
        { text: 'Windows 10/11', basePrice: 50 },
        { text: 'macOS (Apple)', basePrice: 65 },
        { text: 'Linux / Server OS', basePrice: 80 }
    ];

    osOptions.forEach((os) => {
        const opt = document.createElement('option');
        opt.value = os.basePrice;
        opt.innerText = `${os.text} (Base: $${os.basePrice})`;
        selectOS.appendChild(opt);
    });
    calculatorBox.appendChild(selectOS);

    // 4. Dropdown Menu for Issue Severity
    const issueLabel = document.createElement('label');
    issueLabel.innerText = 'Select Issue Severity:';
    issueLabel.style.display = 'block';
    issueLabel.style.marginBottom = '5px';
    calculatorBox.appendChild(issueLabel);

    const selectIssue = document.createElement('select');
    selectIssue.style.width = '100%';
    selectIssue.style.padding = '8px';
    selectIssue.style.marginBottom = '20px';

    const issueOptions = [
        { text: 'Simple Boot Loop Repair', extraPrice: 0 },
        { text: 'Corrupted System File Rebuild', extraPrice: 25 },
        { text: 'Full OS Reinstall + Critical Data Backup', extraPrice: 60 }
    ];

    issueOptions.forEach((issue) => {
        const opt = document.createElement('option');
        opt.value = issue.extraPrice;
        opt.innerText = `${issue.text} (+$${issue.extraPrice})`;
        selectIssue.appendChild(opt);
    });
    calculatorBox.appendChild(selectIssue);

    // 5. Total Price Display Area
    const priceDisplay = document.createElement('div')
    priceDisplay.style.textAlign = 'center';
    priceDisplay.style.padding = '15px';
    priceDisplay.style.background = '#2d2d2d';
    priceDisplay.style.borderRadius = '5px';

    const priceText = document.createElement('h3');
    priceText.innerText = 'Estimated Cost: $50';
    priceText.style.margin = '0';
    priceText.style.color = '#f7df1e';
    priceDisplay.appendChild(priceText);
    calculatorBox.appendChild(priceDisplay);

    // 6. Inject the finished app into the body of the webpage
    document.body.appendChild(calculatorBox);

    // 7. Javascript Mathematical Logic Function
    function calculateTotal() {
        const baseCost = parseInt(selectOS.value);
        const extraCost = parseInt(selectIssue.value);
        const total = baseCost + extraCost;
        priceText.innerText = 'Estimated Cost: $${total}';
    }

    // 8. Event Listeners to watch for user option changes
    selectOS.addEventListener('change', calculateTotal);
    selectIssue.addEventListener('change', calculateTotal);
});
