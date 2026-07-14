// SGT TECH-HUB — shared JS
document.addEventListener('DOMContentLoaded', () => {
  // Quote estimator (index.html)
  const buttons = document.querySelectorAll('#issueGrid button');
  const totalPrice = document.getElementById('totalPrice');
  const issueName = document.getElementById('issueName');
  if (buttons.length) {
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        const base = parseInt(btn.dataset.price, 10);
        totalPrice.textContent = base + 25;
        issueName.textContent = btn.dataset.label + ' + $25 travel';
        // Carry selection into booking form if present on same page
        const serviceSelect = document.getElementById('serviceSelect');
        if (serviceSelect) serviceSelect.value = btn.dataset.label;
      });
    });
  }

  // Booking form (book.html)
  const bookForm = document.getElementById('bookForm');
  if (bookForm) {
    bookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      bookForm.style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    });
  }
});
